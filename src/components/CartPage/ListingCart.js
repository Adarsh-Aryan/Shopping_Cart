import React, { useContext } from 'react'
import { Col,Image, ListGroup, Row } from 'react-bootstrap'
import { ShopContext } from '../../Context/shopContext'
import Rating from '../HomePage/Rating'




const ListingCart = () => {

    const {state:{cart},dispatch}=useContext(ShopContext)

    return (
        <ListGroup>
            {cart.map(item=>{
                return(

                    <ListGroup.Item key={item.id}>
                       <Row style={{alignItems:'center'}}>
                            <Col>
                                <Image src={item.image} alt={item.name} rounded fluid/>
                            </Col>
                            <Col>
                                <span>{item.name}</span>
                            </Col>
                            <Col>
                                ₹ {item.price}
                            </Col>
                            <Col>
                                <Rating rating={item.ratings}/>
                            </Col>
                            <Col>
                                <select name="quantity" className='quantity' style={{
                                    width:'100%',
                                    padding:'0.2rem'

                                }} onChange={(e)=>{
                                    dispatch({
                                        type:'ON_CHANGE_QUANTITY',
                                        payload:{
                                            id:item.id,
                                            qty:e.target.value
                                        }
                                    })
                                }}>
                                    {[...Array(item.inStock)].map((_,i)=>{
                                        return(
                                            <option key={i+1}>{i+1}</option>
                                        )
                                    })}
                                </select>
                                
                            </Col>
                       </Row>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}

export default ListingCart