import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shopContext'
import SingleProduct from './SingleProduct'

const Products = () => {

    const {state:{products}}=useContext(ShopContext)

    const {productState:{bySearch,sort,byOutOfStock,byFastDelivery,byRating}}=useContext(ShopContext)

    

    let filterProducts=products;

    const transformedProducts=()=>{

        if(sort){
            if(sort==='lowToHigh'){
                filterProducts=filterProducts.sort((a,b)=>{
                    return a.price-b.price
                })
            }
            else if(sort==='HighToLow'){
                filterProducts=filterProducts.sort((a,b)=>{
                    return b.price-a.price
                })
            }
            
        }

        if(bySearch){
            filterProducts=filterProducts.filter(product=>{
                return product.name.toLowerCase().includes(bySearch.toLowerCase().trim())
            })
        }

        if(!byOutOfStock){ //byOutOfStock is false meaning we have to render those products which is in stock
            filterProducts=filterProducts.filter(product=>{
                return product.inStock
            })
        }
        if(byFastDelivery){
            filterProducts=filterProducts.filter(product=>{
                return product.fastDelivery
            })
        }

        if(byRating){
            filterProducts=filterProducts.filter(product=>{
                return product.ratings>=byRating
            })
        }

        
        
        
        return filterProducts

    }



    return (
        <div className="product_container">
            {transformedProducts().map(item=>{
                return(
                    <SingleProduct product={item} key={item.id}/>
                )
            })}
        </div>
    )
}

export default Products