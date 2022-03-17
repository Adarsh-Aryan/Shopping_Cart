import React from 'react'
import ListingCart from './ListingCart'
import SideBar from './SideBar'
import '../CartPage.css'

const Cart = () => {
  return (
    <div className='cart_section'>
        <ListingCart/>
        <SideBar/>
    </div>
  )
}

export default Cart