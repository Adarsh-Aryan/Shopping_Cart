
import React, { useContext } from 'react'
import { Card ,Button} from 'react-bootstrap'
import { ShopContext } from '../../Context/shopContext'
import Rating from './Rating'


const SingleProduct = ({ product }) => {

    const {state:{cart},dispatch}=useContext(ShopContext)

    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text style={{
                    display:'flex',
                    flexDirection:'column'
                }}>
                    <span>₹ {product.price.split('.')[0]}</span>

                    <Rating rating={product.ratings}/>
                    
                </Card.Text>

                {!cart.some(c=>c.id===product.id)?
                <Button variant="primary" disabled={!product.inStock} onClick={()=>dispatch({
                    type:'ADD_TO_CART',
                    payload:product
                })}>
                    {!product.inStock?'Out of Stock':'Add to Cart'}
                </Button>:<Button variant='danger' onClick={()=>dispatch({
                    type:'REMOVE_FROM_CART',
                    payload:product
                })}>Remove From Cart</Button>}
                
                
            </Card.Body>
        </Card>
    )
}

export default SingleProduct