import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './favorites';
import CartPage from './cart';
import ProductPage from './productPage';

const AppRoutes = ({products,openModal,addFavoritesFunc,addFavorites,deleteCartItem}) => {
    return (
     
        <Routes>
            <Route path='/' element={   <ProductPage  products={products} openModal={openModal} addFavoritesFunc={addFavoritesFunc}  ></ProductPage>} />
           <Route path='/favorites' element={<FavoritesPage  addFavorites ={addFavorites}/>} />
         
           <Route path='/cart' element={<CartPage addCards={JSON.parse(localStorage.getItem('addCards'))} deleteCartItem ={deleteCartItem}/>}/>
         </Routes>

        
    )
}
export default AppRoutes;
//<Cart addCards={JSON.parse(localStorage.getItem('addCards'))} deleteCartItem ={props.deleteCartItem}/>     
//