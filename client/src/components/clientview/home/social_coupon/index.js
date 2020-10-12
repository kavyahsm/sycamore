import React, {useEffect} from 'react'
import { fetchScoupons, scouponsSelector } from './sCouponSlice'
import {  useDispatch, useSelector } from 'react-redux';
import Scoupon from './scoupon'

export default function Index() {
    const scoupons = useSelector(scouponsSelector)

 const dispatch = useDispatch()

    useEffect(()=>{

dispatch(fetchScoupons())

    }, [dispatch])
   

    
    return (
        <div>
        <Scoupon {...scoupons}/>   
        </div>
    )
}
