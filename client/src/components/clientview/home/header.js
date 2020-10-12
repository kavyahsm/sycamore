import React from 'react'
import styled from 'styled-components'
import banner from '../../../images/banner.jpg'
export default function Header() {
    return (
        <HeaderWrap className="container-fluid" style={{backgroundImage:`url('${banner}')`}}>
            <div className="text">
            <h6 className="m-0">Sycamore</h6>
            <h1 className="m-0 text-uppercase"><b><i>Heading</i></b> Of Sycamore Banner</h1>
            </div>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div`

background-size:100%;
height:300px;
position:relative;
.text{
position:absolute;
top:50%;
right:20%;
text-align:right;

h1{
    color:#5f2703;
    font-size:2.5rem;
font-weight:400;
}
h6{
    font-size:1.3rem;

}
}

` 