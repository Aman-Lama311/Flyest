'use client'
import React, { useState, useEffect, useRef } from 'react';
import { bgImage } from './bgimagedata';
import CustomCursor from './CustomCursor';
import * as THREE from 'three';
import { gsap } from 'gsap';
import HeroContents from './HeroContents';
import HeroContentsProps from './HeroContents';


class WebGLTransition {
  container: HTMLElement; // Add container property
  images: string[]; // Add images property
  currentIndex: number; // Add currentIndex property
  nextIndex: number; // Add nextIndex property
  scene: THREE.Scene; // Add scene property
  camera: THREE.OrthographicCamera; // Add camera property
  renderer: THREE.WebGLRenderer; // Add renderer property
  time: number; // Add time property
  duration: number = 1.5; // Initialize duration property with a default value
  easing: string; // Add easing property
  progress: number; // Add progress property
  isAnimating: boolean; // Add isAnimating property
  currentTransitionType: number; // Add currentTransitionType property
  uniforms: { [key: string]: { value: any } }; // Add uniforms property
  textures: THREE.Texture[] = []; // Add textures property
  material: THREE.ShaderMaterial | null = null; // Add material property with default value
  mesh: THREE.Mesh | null = null; // Add mesh property with default value

  constructor(options: { container: HTMLElement; images: string[]; duration?: number; easing?: string }) {
    this.container = options.container;
    this.currentIndex = 0; // Initialize currentIndex
    this.container = options.container;
    this.images = options.images;
    this.currentIndex = 0;
    this.nextIndex = 0;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      -1, // left
      1, // right
      1, // top
      -1, // bottom
      0, // near
      1000 // far
    );
    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    this.time = 0;
    this.easing = options.easing || 'easeOut'; // Initialize easing property
    this.easing = options.easing || 'easeOut';
    this.progress = 0;
    this.isAnimating = false;
    this.currentTransitionType = 0; // Keep track of current transition
    
    // Uniforms for all transitions
    this.uniforms = {
      time: { value: 0 },
      progress: { value: 0 },
      resolution: { value: new THREE.Vector4(0, 0, 0, 0) },
      texture1: { value: null },
      texture2: { value: null },
      displacement: { value: null },
      width: { value: 0.5 },
      scaleX: { value: 40 },
      scaleY: { value: 40 },
      intensity: { value: 0.3 }
    };

    this.loadTextures();
    this.createDisplacementTexture();
    this.createMesh();
    this.resize();
    
    // Add both resize event listeners for better mobile support
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('orientationchange', this.resize.bind(this));
  }

  loadTextures() {
    const loader = new THREE.TextureLoader();
    this.textures = this.images.map(image => {
      const texture = loader.load(image);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      return texture;
    });

    this.uniforms.texture1.value = this.textures[0];
    this.uniforms.texture2.value = this.textures[0];
  }

  createDisplacementTexture() {
    // Create a noise texture for displacement
    const size = 64;
    const data = new Uint8Array(size * size * 4);
    
    for (let i = 0; i < size * size; i++) {
      const stride = i * 4;
      const val = Math.random() * 255;
      data[stride] = val;
      data[stride + 1] = val;
      data[stride + 2] = val;
      data[stride + 3] = 255;
    }
    
    const displacementTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat
    );
    
    displacementTexture.needsUpdate = true;
    this.uniforms.displacement.value = displacementTexture;
  }

  // Collection of fragment shaders for different transitions
  getFragmentShader(type: number) {
    const fragmentShaders = [
      // Transition 1: Smooth slide
      `
        uniform float time;
        uniform float progress;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform vec4 resolution;

        varying vec2 vUv;
        varying vec4 vPosition;

        void main()	{
          vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
          vec2 p = newUV;
          float x = progress;
          x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));
          vec4 f = mix(
            texture2D(texture1, (p-.5)*(1.-x)+.5), 
            texture2D(texture2, (p-.5)*x+.5), 
            x);
          gl_FragColor = f;
        }
      `,
      
      // Transition 2: Noise wipe
      `
        uniform float time;
        uniform float progress;
        uniform float width;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D displacement;
        uniform vec4 resolution;

        varying vec2 vUv;
        varying vec4 vPosition;
        
        vec2 mirrored(vec2 v) {
          vec2 m = mod(v,2.);
          return mix(m,2.0 - m, step(1.0 ,m));
        }

        void main()	{
          vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
          vec4 noise = texture2D(displacement, mirrored(newUV+time*0.04));
          float prog = progress*0.8 -0.05 + noise.g * 0.06;
          float intpl = pow(abs(smoothstep(0., 1., (prog*2. - vUv.x + 0.5))), 10.);
          
          vec4 t1 = texture2D(texture1, (newUV - 0.5) * (1.0 - intpl) + 0.5);
          vec4 t2 = texture2D(texture2, (newUV - 0.5) * intpl + 0.5);
          gl_FragColor = mix(t1, t2, intpl);
        }
      `,
      
      // Transition 3: Displacement slide
      `
        uniform float time;
        uniform float progress;
        uniform float intensity;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform vec4 resolution;

        varying vec2 vUv;

        void main()	{
          vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

          vec4 d1 = texture2D(texture1, newUV);
          vec4 d2 = texture2D(texture2, newUV);

          float displace1 = (d1.r + d1.g + d1.b)*0.33;
          float displace2 = (d2.r + d2.g + d2.b)*0.33;
          
          vec4 t1 = texture2D(texture1, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));
          vec4 t2 = texture2D(texture2, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));

          gl_FragColor = mix(t1, t2, progress);
        }
      `,
      
      // Transition 4: Planetary rotation
      `
        uniform float time;
        uniform float progress;
        uniform float intensity;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D displacement;
        uniform vec4 resolution;
        
        varying vec2 vUv;
        
        mat2 getRotM(float angle) {
          float s = sin(angle);
          float c = cos(angle);
          return mat2(c, -s, s, c);
        }
        
        const float PI = 3.1415;
        const float angle1 = PI *0.25;
        const float angle2 = -PI *0.75;

        void main()	{
          vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

          vec4 disp = texture2D(displacement, newUV);
          vec2 dispVec = vec2(disp.r, disp.g);

          vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
          vec4 t1 = texture2D(texture1, distortedPosition1);

          vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
          vec4 t2 = texture2D(texture2, distortedPosition2);

          gl_FragColor = mix(t1, t2, progress);
        }
      `
    ];
    
    return fragmentShaders[type];
  }

  createMesh() {
    const vertexShader = `
      varying vec2 vUv;
      varying vec4 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = vPosition;
      }
    `;

    // Start with the first transition type
    const fragmentShader = this.getFragmentShader(0);

    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);
  }

  // Update shader for a new transition type
  updateShader(transitionType: number) {
    this.currentTransitionType = transitionType;
    const fragmentShader = this.getFragmentShader(transitionType);
    
    // Create new material with the selected shader
    const newMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.material ? this.material.vertexShader : '',
      fragmentShader: fragmentShader,
      transparent: true
    });
    
    // Replace material
    if (this.mesh && this.mesh.material) {
      if (Array.isArray(this.mesh.material)) {
        this.mesh.material.forEach(material => material.dispose());
      } else {
        this.mesh.material.dispose();
      }
      this.mesh.material = newMaterial;
    }
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    this.renderer.setSize(width, height);
    
    // Update resolution uniform
    const imageAspect = height / width;
    let a1, a2;
    
    if (height / width > imageAspect) {
      a1 = (width / height) * imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = (height / width) / imageAspect;
    }
    
    this.uniforms.resolution.value.set(width, height, a1, a2);
    
    // Adjust intensity for mobile
    if (width <= 768) {
      // Lower intensity for smaller screens to avoid harsh effects
      if (this.currentTransitionType === 3) {
        this.uniforms.intensity.value = 0.7;
      } else if (this.currentTransitionType === 2) {
        this.uniforms.intensity.value = 0.2;
      }
    } else {
      // Reset to default values for larger screens
      if (this.currentTransitionType === 3) {
        this.uniforms.intensity.value = 1.0;
      } else if (this.currentTransitionType === 2) {
        this.uniforms.intensity.value = 0.3;
      }
    }
  }

  goTo(index: number, transitionType: number | null = null) {
    if (this.isAnimating || this.currentIndex === index) return;
    
    this.isAnimating = true;
    this.nextIndex = index;
    
    // If transition type is provided, update the shader
    if (transitionType !== null) {
      this.updateShader(transitionType);
    }
    
    // Adjust intensity based on screen size and transition type
    const width = window.innerWidth;
    if (width <= 768) {
      // Use gentler transitions for mobile
      if (this.currentTransitionType === 3) {
        this.uniforms.intensity.value = 0.7;
      } else if (this.currentTransitionType === 2) {
        this.uniforms.intensity.value = 0.2;
      } else {
        this.uniforms.intensity.value = 0.2;
      }
    } else {
      // Full effect for desktop
      if (this.currentTransitionType === 3) {
        this.uniforms.intensity.value = 1.0;
      } else if (this.currentTransitionType === 2) {
        this.uniforms.intensity.value = 0.3;
      } else {
        this.uniforms.intensity.value = 0.3;
      }
    }
    
    this.uniforms.texture1.value = this.textures[this.currentIndex];
    this.uniforms.texture2.value = this.textures[this.nextIndex];
    
    // Adjust transition duration based on device
    const transitionDuration = width <= 768 ? this.duration * 0.8 : this.duration;
    
    gsap.fromTo(this.uniforms.progress, 
      { value: 0 },
      { 
        value: 1, 
        duration: transitionDuration, 
        ease: this.easing,
        onComplete: () => {
          this.currentIndex = this.nextIndex;
          this.isAnimating = false;
        }
      }
    );
  }

  render() {
    this.time += 0.05;
    this.uniforms.time.value = this.time;
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      if (this.mesh.geometry) {
        this.mesh.geometry.dispose();
      }
      if (Array.isArray(this.mesh.material)) {
        this.mesh.material.forEach(material => material.dispose());
      } else if (this.mesh.material) {
        this.mesh.material.dispose();
      }
    }
    this.renderer.dispose();
    window.removeEventListener('resize', this.resize.bind(this));
    window.removeEventListener('orientationchange', this.resize.bind(this));
    
    if (this.container && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef(null);
  const webglRef = useRef<WebGLTransition | null>(null);
  const rafRef = useRef<number | null>(null);
  
  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('orientationchange', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('orientationchange', checkIsMobile);
    };
  }, []);
  
  // Initialize WebGL transition
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Extract image URLs for WebGL
    const imageUrls = bgImage.map(item => item.img_url.src);
    
    // Create WebGL transition
    webglRef.current = new WebGLTransition({
      container: containerRef.current,
      images: imageUrls,
      duration: isMobile ? 1.2 : 1.5, // Shorter duration on mobile
      easing: 'easeOut'
    });
    
    // Animation loop
    const animate = () => {
      if (webglRef.current) {
        webglRef.current.render();
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (webglRef.current) {
        webglRef.current.destroy();
      }
    };
  }, []);
  
  const getRandomTransition = () => {
    // For mobile, use simpler transitions more often
    if (isMobile) {
      // 70% chance to use simpler transitions (0 and 1)
      return Math.random() < 0.7 ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * 4);
    }
    // Desktop - full range of transitions
    return Math.floor(Math.random() * 4);
  };
  
  const triggerTransition = () => {
    if (!webglRef.current) return;
    
    const nextIndex = (currentImageIndex + 1) % bgImage.length;
    const transitionType = getRandomTransition();
    
    webglRef.current.goTo(nextIndex, transitionType);
    setCurrentImageIndex(nextIndex);
  };
  
  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior
    setIsHolding(true);
    setIsPaused(true);
    
    timeoutRef.current = setTimeout(() => {
      triggerTransition();
      intervalRef.current = setInterval(() => {
        triggerTransition();
      }, isMobile ? 1200 : 1500);
    }, 300);
  };
  
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior
    setIsHolding(false);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };
  
  const handleMouseDown = () => {
    if (isMobile) return; // Skip for mobile devices
    setIsHolding(true);
    setIsPaused(true);
    
    timeoutRef.current = setTimeout(() => {
      triggerTransition();
      intervalRef.current = setInterval(() => {
        triggerTransition();
      }, 1500);
    }, 300);
  };
  
  const handleMouseUp = () => {
    if (isMobile) return; // Skip for mobile devices
    setIsHolding(false);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };
  
  const handleClick = () => {
    if (!isHolding) {
      triggerTransition();
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 2000);
    }
  };
  
  // Auto transition with random effects
  useEffect(() => {
    if (!isPaused) {
      // Shorter interval on mobile for better engagement
      const interval = setInterval(triggerTransition, isMobile ? 4000 : 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentImageIndex, isMobile]);
  
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current as unknown as number);
      clearInterval(intervalRef.current as unknown as number);
    };
  }, []);
  
  return (
    <>
      {!isMobile && <CustomCursor />}
      <section
        className="w-full h-[90vh] relative overflow-hidden"
        style={{ cursor: isMobile ? 'auto' : 'none' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          ref={containerRef}
          className="absolute inset-0"
        />
        
        <div
          className="absolute inset-0 pointer-events-none bg-gray-950"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'wavy\' x=\'0\' y=\'0\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.01\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3CfeDisplacementMap in=\'SourceGraphic\' scale=\'30\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23wavy)\' opacity=\'0.3\'/%3E%3C/svg%3E")',
            mixBlendMode: 'soft-light',
          }}
        />
        <div className="absolute inset-0 bg-black pointer-events-none opacity-10" />
        {/* hero contents */}
        <HeroContents currentImageIndex={currentImageIndex} />
      </section>
    </>
  );
};

export default Hero;