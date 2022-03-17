export const ProductReducer=(state,action)=>{
    switch (action.type) {
        case 'FILTER_BY_SORT':
            
            return{
                ...state,sort:action.payload
            }

        case 'FILTER_BY_STOCK':

            return{
                ...state,byOutOfStock:!state.byOutOfStock
            }
           
        case 'FILTER_BY_FASTDELIVERY':

            return{
                ...state,byFastDelivery:!state.byFastDelivery
            }

        case 'FILTER_BY_RATING':

            return{
                ...state,byRating:action.payload
            }

        case 'FILTER_BY_SEARCH':

            return{
                ...state,bySearch:action.payload
            }

        case 'CLEAR_FILTERS':
            return{
                byRating:0,
                byOutOfStock:false,
                byFastDelivery:false,
                bySearch:'',
                sort:''
               
            }
    
        default:
            throw new Error('Invalid Action')
    }
}