import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


const userInfo =  localStorage.getItem('user') ?
   JSON.parse(localStorage.getItem('user')) : null

// //    const {token} = userInfo
// const t = userInfo ? true : false
// console.log(t);
export const initialState = {
    loading: false,
    hasErrors: false,
    user: userInfo,
    isAuthenticate: userInfo? true: false
  }

  export const authSlice = createSlice({
     name:"auth",
     initialState,
     reducers :{
      
        getLogin: state =>{

            state.loading = true
        },

        getLoginSuccess: (state, {payload}) =>{

            state.user = payload
            state.loading = false
            state.hasErrors = false
            state.isAuthenticate = true
           
        },
        getLoginFailure: state =>{

            state.loading = false
            state.hasErrors = true
        },

        logout: state => {

            state.user = null
            state.loading = false
            state.hasErrors = false
            state.isAuthenticate = false

        }

     }
  })

  export const {getLogin, logout,  getLoginSuccess, getLoginFailure} = authSlice.actions
  export const loginSelector = state => state.auth

  export default authSlice.reducer

  export const fetchLogin = (logIndata) => async dispatch =>{


    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

    dispatch(getLogin())

    try {

        const {data} = await  axios.post('/api/auth', logIndata, config)
     

        dispatch(getLoginSuccess(data))

        localStorage.setItem("user", JSON.stringify(data))

    } catch (error) {
        

        dispatch(getLoginFailure(error.response.data.msg))
    }

  }

  export const logouthandler = () => async dispatch =>{

    localStorage.removeItem('user');

    dispatch(logout())
 
   }