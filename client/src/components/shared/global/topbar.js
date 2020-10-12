import React, {useState } from 'react'
import styled from 'styled-components'
import LoginPopup from '../auth/loginpopup'
import Login from '../auth/login'
import {  logouthandler } from '../auth/authSlice'
import { MdShoppingCart } from 'react-icons/md';
import { Badge } from 'antd';
import {  useDispatch, useSelector } from 'react-redux';
import {cartCouponSelector} from '../../clientview/home/social_coupon/cartSlice'
import CartView from '../../clientview/home/social_coupon/cartView'


export default function Topbar({isAuthenticate, user}) {
  
  const [visible, setVisible] = useState(false)


const items = useSelector(cartCouponSelector)

const showDrawer = () => {
  setVisible(true);
}

const onClose = () => {
  setVisible(false);
}


    const dispatch = useDispatch()

    return (
        <TopbarWrap>

 <div className="container">
<ul>
  {
    isAuthenticate &&  <li><small>Welcome to {user.user.user_name} </small></li>
  }  
       
    <li><small>Available Balance: 0000/- </small></li>
    <li>
   <Badge size="small" onClick={()=>showDrawer()}	 count={ items.cartCoupons.length }>
      <MdShoppingCart className="tcart"/>
    </Badge>
    </li>
    {
      isAuthenticate ?
       <li>
          <small onClick={()=>dispatch(logouthandler())} style={{cursor:"pointer"}}>logout</small> 
      </li>:
       <li><LoginPopup><Login/></LoginPopup></li>
    }
</ul>
  </div>  

  <CartView open={visible} onClose={onClose}/>        
        </TopbarWrap>
    )
}

const TopbarWrap = styled.div`

background-color:#5f2703;
color:white;
.tcart{

  font-size:1.2rem;
  cursor:pointer;
}
.container{
   
    width:90%;
    margin:0 auto;
    


ul{
    margin:0;
    display:flex;
    padding:0 0.1rem;
    align-items:center;
    justify-content:flex-end;

    li{

        list-style:none;
        font-size:1.2rem;
        margin:0 1.3rem;

    }
}
}

`
