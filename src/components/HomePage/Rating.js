import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating,style,handleRating}) => {
  return (
        <span>
            {[...Array(5)].map((_,i)=>{
                return(
                    <span style={style} key={i} onClick={()=>handleRating(i)}>
                        { rating>i?<AiFillStar/>:<AiOutlineStar/>}
                        
                    </span>
                )
            })}
        </span>
  )
}

export default Rating