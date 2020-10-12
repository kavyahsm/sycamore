import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Topbar from './topbar'
import { useSelector } from 'react-redux';
import {  loginSelector } from '../auth/authSlice'

export default function AppWrap({children}) {
  const user = useSelector(loginSelector)


    return (
        <>
          <Topbar {...user}/>
          <Navbar />
         {children}
          <Footer/>
        </>
    )
}
