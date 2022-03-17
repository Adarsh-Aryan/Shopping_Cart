export const CartReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,cart:[...state.cart,{...action.payload,qty:1}]
            }
        
        case 'REMOVE_FROM_CART':

            return{
                ...state,cart:state.cart.filter(item=>{
                    return item.id !== action.payload.id
                })
            }

        case 'ON_CHANGE_QUANTITY':
            
            return{
                ...state,cart:state.cart.filter(item=>{
                    return item.id===action.payload.id?item.qty=action.payload.qty:item.qty
                })
            }

        
        default:
            throw new Error()
    }
}
