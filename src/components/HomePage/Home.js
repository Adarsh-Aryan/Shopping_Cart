import React from 'react'
import '../HomePage.css'
import Filters from './Filters'
import Products from './Products'

const Home = () => {
  return (
    <div className='home'>
        <Filters/>
        <Products/>
    </div>
  )
}

export default Home