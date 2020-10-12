import { createSlice } from '@reduxjs/toolkit';
import { useSelector} from 'react-redux'
const cart =  localStorage.getItem('cart') ?
   JSON.parse(localStorage.getItem('cart')) : []


export const initialState = {

    loading: false,
    hasErrors: false,
    cartCoupons:cart

}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        getCartCoupons: state =>{

            state.loading = true
        },

        getCartCouponSuccess : (state, {payload}) =>{
         
            state.cartCoupons =[...state.cartCoupons, payload] 
            state.loading = false
            state.hasErrors = false
        

            localStorage.setItem('cart', JSON.stringify(state.cartCoupons) )


        },
        increments:( state, {payload}) =>{

          
            state.cartCoupons = state.cartCoupons.map(item=>{

                    item.quantity = 1;

                if(item._id === payload){
                   item.quantity += 1;
                   
                   return state.cartCoupons
                }
               
            })

        },
        getCartCouponsFailure : state =>{

            state.loading = false
            state.hasErrors = true 
        }

    }
})

export const {
    getCartCouponsFailure,
    getCartCouponSuccess,
    getCartCoupons,
    increments
} = cartSlice.actions

export const cartCouponSelector = state => state.cart
export default cartSlice.reducer

export const addCartCoupons = (data) => async dispatch =>{

    dispatch(getCartCoupons())
    
    try {
       
        dispatch(getCartCouponSuccess(data))
        
       
        
    } catch (error) {
        dispatch(getCartCouponsFailure())
  
    }
}

export const qtyupdate = (id) => async dispatch =>{

    dispatch(increments(id))
// const cart = useSelector(cartCouponSelector)

// cart.map(item =>{

//     if(item._id === data._id){

//         item.quantity = qty
//     }

// })


}

