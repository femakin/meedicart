import React from 'react'
// import Categories from './Components/Categories/Categories'

import Categories from '../Categories/Categories'
import Hero from '../Hero/Hero'
import Howitworks from '../Howitworks/Howitworks'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Howitworks/>
      <Categories/>
    </div>
  )
}
