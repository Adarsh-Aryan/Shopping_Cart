import React, { useContext} from 'react'
import { Button, FormCheck } from 'react-bootstrap'
import { ShopContext } from '../../Context/shopContext'
import Rating from './Rating'

const Filters = () => {

    

    const {productState:{byRating,byOutOfStock,byFastDelivery,sort},productDispatch}=useContext(ShopContext)

    
    


    const handleRating=(i)=>{
        productDispatch({
            type:'FILTER_BY_RATING',
            payload:i+1
        })
    }


    return (
        <div className="filters">
            <p className='title'>Filters</p>
            <span>
                <FormCheck
                    inline
                    label="Ascending"
                    name='group1'
                    type='radio'
                    id={`inline-1`}
                    onChange={()=>{
                        productDispatch({
                            type:'FILTER_BY_SORT',
                            payload:'lowToHigh'
                        })
                    }}
                    checked={sort==='lowToHigh'?true:false}


                />
            </span>
            <span>
                <FormCheck
                    inline
                    label="Descending"
                    name='group1'
                    type='radio'
                    id={`inline-2`}
                    onChange={()=>{
                        productDispatch({
                            type:'FILTER_BY_SORT',
                            payload:'HighToLow'
                        })
                    }}
                    checked={sort==='HighToLow'?true:false}
                    
                />
            </span>
            <span>
                <FormCheck
                    inline
                    label="Include Out Of Stock"
                    name='group1'
                    type='checkbox'
                    id={`inline-3`}
                    onChange={()=>{
                        productDispatch({
                            type:'FILTER_BY_STOCK'
                        })
                    }}
                    checked={byOutOfStock?true:false}

                />
            </span>
            <span>
                <FormCheck
                    inline
                    label="Fast Delivery Only"
                    name='group1'
                    type='checkbox'
                    id={`inline-4`}
                    onChange={()=>{
                        productDispatch({
                            type:'FILTER_BY_FASTDELIVERY',

                        })
                    }}
                    checked={byFastDelivery?true:false}

                />
            </span>
            <span>
                <label> Rating :</label>
                <Rating rating={byRating} style={{cursor:'pointer'}} handleRating={handleRating}/>    
                
                


            </span>
            <span>
                <Button variant='light' className='w-100' onClick={()=>{
                    productDispatch({
                        type:'CLEAR_FILTERS',

                    })
                }}>Clear Filters</Button>
            </span>
        </div>
    )
}

export default Filters