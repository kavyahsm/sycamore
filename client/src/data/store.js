import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import reciepeReducer from '../components/recipes/reciepeSlice';
import authReducer from '../components/shared/auth/authSlice';
import scouponsReducer from '../components/clientview/home/social_coupon/sCouponSlice';
import cartReducer from '../components/clientview/home/social_coupon/cartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    reciepes:reciepeReducer,
    auth:authReducer,
    scoupons:scouponsReducer,
    cart:cartReducer
  },
});
