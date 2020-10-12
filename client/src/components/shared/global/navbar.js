import React from 'react'
import styled from 'styled-components'

export default function Navbar(props) {
console.log(props);
const navbar = [
        {

        title:"Home",
        path:"/"
    },

{
    title:"contact",
    path:"contact"
},
{
    title:"products",
    path:"products"
},
{
    title:"About",
    path:"about"
},
{
    title:"contact",
    path:"contact"
}]


    return (
        <NavbarWrap>
          
          <nav className="container">
    <ul>
           {
               navbar.map((item, i)=>{

               return <li key={i}>
                   {item.title}
               </li>
               })
           }
    </ul>
          </nav>

            
        </NavbarWrap>
    )
}

const NavbarWrap = styled.div`

background-color:#af7c5c;
color:white;
.container{
   
    width:90%;
    margin:auto;
    


ul{
    margin:0;
    display:flex;
    padding: 0.8rem;
    align-items:center;
    justify-content:flex-start;

    li{

        list-style:none;
        font-size:1.2rem;
        margin:0 1.3rem;

    }
}
}

`