'use client'
import React from 'react'
import Hero from '../HeroComponents/Hero'
import About from '../about/About'
import Cards from '../cards/Cards'
import WhatWeDo from '../whatwedo/WhatWeDo'
import Blog from '../blog/Blog'
import TrekCard from '../card/TrekCard'
import Testmonials from '../testmonials/Testmonials'
import CallToAction from '../calltoaction/CallToAction'

const Home = () => {
  return (
    <div>
       <Hero /> 
       <About />
       <TrekCard />
       <Testmonials />
       <CallToAction />
       <WhatWeDo />
       {/* <Blog /> */}
       {/* <Cards /> */}
    </div>
  )
}

export default Home
