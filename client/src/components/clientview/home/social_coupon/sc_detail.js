import React, {useEffect, useState} from 'react'
import { fetchCurrentScoupons, scouponsSelector } from './sCouponSlice'
import { addCartCoupons, cartCouponSelector } from './cartSlice'
// import { InputNumber } from 'antd';
// import { Button, Space, Upload, Popconfirm } from 'antd';
import {  useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { Table } from 'antd';
import { MdCardGiftcard, MdAddShoppingCart } from "react-icons/md";

export default function Scdetail() {
    const dispatch = useDispatch()
    let { id } = useParams();
    const isthere = useSelector(cartCouponSelector)

    const {catgoryCoupon} = useSelector(scouponsSelector)
const [count, setCount] = useState(0);
const [isAdded, setAdded] = useState([]);

useEffect(()=>{

 dispatch(fetchCurrentScoupons(id))

}, [dispatch])




const onAdd = (id, data) =>{

console.log(data);
    setCount(count + 1)
    setAdded([...isAdded, id])
dispatch(addCartCoupons(data))

}





const columns = [
  
{

    title:'E-voucher',
   
    render: ()=>(
     <span className="bg-dark p-2 text-center text-white">
         <MdCardGiftcard className="voucher"/>&nbsp; e-voucher</span>
    ),
    key:'_id'
},
        {
            title: 'Value',
            dataIndex: 'value',
            render:(value)=>{

           return <small>{value}&nbsp;&#x20B9;</small>
            },
            key: '_id',
          },
          
        {
            title: 'Validity',
            dataIndex: 'validity',
            key: '_id',
          },
     {
            title: 'Details',
            dataIndex: 'details',
            key: '_id',
          },

          {
              tital:'Action',
              dataIndex:'_id',
              render:(text, record)=>{
            

               let isFound =  isthere.cartCoupons.filter(item=>{

                    return item._id === text
                })
                

              
             
           
                return <button disabled={isFound.length>0 ? true : false} onClick={()=>onAdd(text, record)} className="btn btn-light">
                    <MdAddShoppingCart className="addcart"/>&nbsp; 
                    <small> {isFound.length>0 ? "Added" : "Add Cart"} </small>

                    </button>

              }
          }
]




    return (
        <ScDetailWrap className="container my-5">
            <div className="row">
                <div className="col-sm-3 ">
                   <div className="card bg-dark py-5 shadow-sm">

                  <h1 className="text-light text-center mb-0">{catgoryCoupon.couponName}</h1>
                  <hr />
                   </div>

                </div>
                <div className="col-sm-9">


                <Table columns={columns} dataSource={catgoryCoupon.coupons} />




                </div>

            </div>
          
        </ScDetailWrap>
    )
}

const ScDetailWrap = styled.div`

.voucher{

color:orange;
font-size:1.2rem;

}

.addcart{

    color:#AF7C5C;
    font-size:1.2rem;

}

hr{
    height:0.2rem;
    background-color:orange;
    width:50%;
    margin:0.2rem auto;
    
}
.addCart{

    display:flex;
    align-items:center;
    justify-content:space-around;
     li{

         list-style:none;
         text-align:center;

     }


     
}
`