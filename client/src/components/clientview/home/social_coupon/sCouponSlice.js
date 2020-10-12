import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const initialState = {

    loading: false,
    hasErrors: false,
    coupons:[],
    catgoryCoupon:[]

}

export const scouponSlice = createSlice({
    name:"scoupon",
    initialState,
    reducers:{

        getSCoupons: state =>{

            state.loading = true
        },

        getSCouponsSuccess: (state, {payload}) =>{

            state.coupons = payload
            state.loading = false
            state.hasErrors = false
        
            
        },

        getCurrentCatagory : (state, {payload})=>{

            state.loading = false
            state.hasErrors = false
            state.catgoryCoupon = payload

        },


        getScouponsFailure : state =>{

            state.loading = false
            state.hasErrors = true 
        }

    }
})

export const {getScouponsFailure,
    getCurrentCatagory,
     getSCouponsSuccess,
      getSCoupons} = scouponSlice.actions
      
export const scouponsSelector = state => state.scoupons
export default scouponSlice.reducer

export const  fetchScoupons = () => async dispatch =>{

    dispatch(getSCoupons())
    try {

  
    const {data} = await axios.get('/api/socialcoupons');
  
    dispatch(getSCouponsSuccess(data.getcoupon))

    } catch (error) {

        dispatch(getScouponsFailure())
 
    }
    
}

export const  fetchCurrentScoupons = (id) => async dispatch =>{
    dispatch(getSCoupons())

    try {
        const {data} = await axios.get(`/api/socialcoupon/${id}`);
     
        dispatch(getCurrentCatagory(data))


    } catch (error) {
        dispatch(getScouponsFailure("Somthing went wrong"))

    }

}