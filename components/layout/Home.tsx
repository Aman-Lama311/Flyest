'use client'
import React from 'react'
import Hero from '../HeroComponents/Hero'
import About from '../about/page'
import Cards from '../cards/Cards'
import WhatWeDo from '../whatwedo/WhatWeDo'
import Blog from '../blog/Blog'
import TrekCard from '../card/TrekCard'
import Popular from '../card/Popular'
import Book from '../layout/Book'
import ActivityCarousel from '../layout/Activity'
import Tips from '../layout/Tips'
import CallToAction from '../calltoaction/CallToAction'

const Home = () => {
  return (
    <div>
       <Hero /> 
       <About />
       <TrekCard />
       <Popular/>
        <CallToAction />
       {/* <Testmonials /> */}
       <ActivityCarousel />
       <Book/>
       <WhatWeDo />
       {/* <Blog /> */}
       {/* <Cards /> */}
    </div>
  )
}

export default Home
