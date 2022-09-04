import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './componentns/favoritespage/favorites';
import CartPage from './componentns/cart/cart';
import ProductPage from './componentns/productpage/productPage';

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