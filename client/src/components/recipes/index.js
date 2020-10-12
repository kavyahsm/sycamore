import React,  { useEffect }  from 'react'
import { fetchRecipes, recipesSelector } from './reciepeSlice'
import { useSelector, useDispatch } from 'react-redux';

import Reciepe from './Reciepe'
export default function Index() {

    const recipes = useSelector(recipesSelector)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchRecipes())

    }, [dispatch])



    return (
        <>
      <Reciepe {...recipes}/>

      </>
    )
}
