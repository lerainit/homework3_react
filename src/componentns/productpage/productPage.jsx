import React from 'react'
import Card from '../card/productCard'



const ProductPage = ({products,addFavoritesFunc,openModal}) =>{

return(
<>
   
     {products.map(({id,name,price,art,url,addFavorites}) =><Card key={id}  id ={id}  name= {name} price ={price} art ={art} url={url}  fill={addFavorites=== true? '#FFFF00':'#fff' } addFavoritesFunc={()  =>{addFavoritesFunc(id)}} openModal ={openModal} ></Card>)}
    
    </>
    )
    
    
    
    }
    export default ProductPage
   