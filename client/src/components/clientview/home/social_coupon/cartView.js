import React, {useState} from 'react'
import { Drawer, Space } from 'antd';
import { qtyupdate, cartCouponSelector } from './cartSlice'
import {useDispatch, useSelector} from 'react-redux'
import { Button } from 'antd';

export default function CartView({open, onClose}) {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
 
const cart = useSelector(cartCouponSelector)

const increment = (id) =>{


  dispatch(qtyupdate(id, qty, 'incr'))
  

}

const decrement = (id) =>{
 
  dispatch(qtyupdate(id, qty, 'decr'))



}

    return (
        <div>
              <Drawer
          title="View Cart"
          placement="right"
          closable={false}
          onClose={()=>onClose()}
          visible={open}
          key="right"
        >
          {
              cart.cartCoupons.map((item, i)=>{

                return  <div key={i} className="shadow my-3 align-items-center justify-content-centent p-3">
                     <p>{item.value}</p>
                   <Space>
                     <Button type="primary" onClick={()=>increment(item._id)}>-</Button>
                     <Button>{1}</Button>
                     <Button type="primary" onClick={()=>decrement(item._id)}>+</Button>
        
                   </Space>
                </div>
              })
          }
       

        </Drawer> 
        </div>
    )
}
