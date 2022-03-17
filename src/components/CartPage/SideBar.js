import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ShopContext } from '../../Context/shopContext'

const SideBar = () => {

    const { state: { cart } } = useContext(ShopContext)

    const [total, setTotal] = useState(0)

    const calcTotalPrice = () => {
        const totalCost = cart.reduce((prev, curr) => prev + Number(curr.price)*(curr.qty), 0)

        setTotal(totalCost)
    }

    useEffect(() => {
        calcTotalPrice()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);


    return (
        <div className='summary'>

            <p className="title">Subtotal: {cart.length} items</p>

            <span>Total: ₹{total}</span>

            <Button  style={{ margin: '20px 0px' }} disabled={cart.length === 0}>Proceed To Checkout</Button>

        </div>
    )
}

export default SideBar