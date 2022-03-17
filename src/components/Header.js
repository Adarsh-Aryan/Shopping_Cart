import React, { useContext } from 'react'
import { Container, FormControl, Nav, Navbar,Dropdown, Badge, Button} from 'react-bootstrap'
import { useHistory,Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { ShopContext } from '../Context/shopContext'
import {BsFillTrashFill} from 'react-icons/bs'
import './Header.css'





const Header = () => {

    const history= useHistory()

    const {productState:{bySearch},productDispatch}=useContext(ShopContext)

    const {state:{cart},dispatch}=useContext(ShopContext)

    

    return (

        <>

        

        <Navbar bg="dark" variant='dark' className='header'>
            <Container fluid style={{
                justifyContent:'space-around'
            }}>
                <Navbar.Brand><Link to="/">Shopping Cart</Link></Navbar.Brand>

                <Navbar.Text>
                    <FormControl
                        type='search'
                        placeholder='Search...'
                        value={bySearch}
                        onChange={(e)=>{
                            productDispatch({
                                type:'FILTER_BY_SEARCH',
                                payload:e.target.value
                            })
                        }}
                        aria-label='Search'

                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color='white' fontSize='25px'/>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{
                            left:'-7rem',
                            padding:'0.5rem'
                        }}>

                            {cart.length>0?
                            <>
                                {cart.map(item=>{
                                    return(
                                        <div className="cart_item" key={item.id}>
                                            <img src={item.image} alt={item.name} />
                                            <div className="item_details">
                                                <span>{item.name}</span>
                                                <span>₹ {item.price.split('.')[0]}</span>
                                            </div>
                                            <BsFillTrashFill style={{cursor:'pointer'}} onClick={()=>{
                                                dispatch({
                                                    type:'REMOVE_FROM_CART',
                                                    payload:item
                                                })
                                            }}/>

                                        </div>
                                    )
                                })}
                                <Button variant="primary" className='w-100' onClick={()=>{
                                    history.push('/cart')
                                }}>Go To Cart </Button>
                            </>:<Dropdown.Item>Cart is Empty!</Dropdown.Item>}
                            
                            
                            
                        </Dropdown.Menu>

                    </Dropdown>

                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header