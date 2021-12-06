import React, { useContext } from 'react'
import { AppContext } from '../Context/DataContext'
import Noproducts from './Noproducts'
import Products from './Products'
const ShowProducts = () => {
    const {showItems} = useContext(AppContext)
    return (
      <div>
        {showItems!==[] 
            ?  <Products/> 
            : <Noproducts/>}
      </div>)
}

export default ShowProducts
