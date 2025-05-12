'use client'
import React from 'react'
import Hero from '../HeroComponents/Hero'
import About from '../about/About'
import Cards from '../cards/Cards'
import WhatWeDo from '../whatwedo/WhatWeDo'
import Blog from '../blog/Blog'
import TrekCard from '../card/TrekCard'

const Home = () => {
  return (
    <div>
       <Hero /> 
       <About />
       <TrekCard />
       <WhatWeDo />
       <Blog />
       <Cards />
    </div>
  )
}

export default Home
