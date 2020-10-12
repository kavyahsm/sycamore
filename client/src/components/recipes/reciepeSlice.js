import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    loading: false,
    hasErrors: false,
    recipes: [],
  }

export const recipesSlice = createSlice({

    name:"reciepe",
    initialState,
    reducers:{
        getRecipes: state => {
          state.loading = true
        },
        getRecipesSuccess: (state, { payload }) => {
         
          state.recipes = payload
          state.loading = false
          state.hasErrors = false
          
        },
        getRecipesFailure: state => {
          state.loading = false
          state.hasErrors = true
        },
      },

})

export const { getRecipes, getRecipesSuccess, getRecipesFailure } = recipesSlice.actions
export const recipesSelector = state => state.reciepes

export default recipesSlice.reducer

export const fetchRecipes = () => async dispatch =>{
    dispatch(getRecipes())

      try {
        
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        const data = await response.json()

    dispatch(getRecipesSuccess(data.meals))

      } catch (error) {
        dispatch(getRecipesFailure())
      }

  }









  
// Asynchronous thunk action
// export function fetchRecipes() {
//     return async dispatch => {
//       dispatch(getRecipes())
  
//       try {
//         const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//         const data = await response.json()
    
//         dispatch(getRecipesSuccess(data.meals))
//       } catch (error) {
//         dispatch(getRecipesFailure())
//       }
//     }
//   }