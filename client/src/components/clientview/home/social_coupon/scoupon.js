import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'
export default function Scoupon({coupons, loading}) {



    return (
        <ScouponWrap className="container py-sm-5">
          {loading && <Spin className="load" tip="Loading..."/>}  
          <div className="row">

              {
                  coupons.map((item, i)=>{

                    return  <div key={i} className="col-sm-4 my-3" >
                        <Fade duration={2000}>
                            <Link to={`/socialcoupon/${item.coupon_name}`}>
                    <div className="coupon bg-dark shadow p-4">

                      <img src="https://res-1.cloudinary.com/linkisin/image/upload/f_auto,q_auto/v1503325439/linkisin/production/store/Makemytrip_jt2afl.png"
                       alt="imglogo" className="mx-auto d-block" width="50%"/>
                      <h6 className="text-center text-light">{item.coupon_name}</h6>

                   <hr/>
                   

                    </div>
                    </Link>
                        </Fade>

                    </div>

                  })
              }
             
          </div>

        </ScouponWrap>
    )
}

const ScouponWrap = styled.div`

hr{

    height:2px;
    border-bottom:2px solid white;
    border-style:dashed;
}

.load{

 text-align:center;
 margin:auto;
 display:block;

}
`