
import './App.scss';
import React, {useEffect, useState} from 'react'
import Modal from './componentns/modal/modal'
import Navigation from './componentns/navigation/Navigation';
import AppRoutes from './AppRoutes';



const initLocalStorage = () =>{
 
  let addCardsArr =[]
 
 if(!localStorage.getItem('addCards')){
 localStorage.setItem('addCards',JSON.stringify(addCardsArr))
 }
 if(!localStorage.getItem('addFavorites')){
   localStorage.setItem('addFavorites',JSON.stringify([]))
   }}
   initLocalStorage()

const  App = ()=> {

 
//const [state,setState] = useState({})
 const[ isOpenModal,setIsOpenModal] = useState(false)
 const[products,setProducts] = useState([])
  //JSON.parse(localStorage.getItem('products')),
 
 const [text] = useState('Are  you sure you want to add this product to cart?')
  const[ backgroundColor] = useState('cadetblue')
 const[ color] =useState('green')
 const[addCardsArr,setAddCards] = useState( JSON.parse(localStorage.getItem('addCards')))
 const [ addFavoritesArr,setFavorites] = useState( JSON.parse(localStorage.getItem('addFavorites')))
 const[cardId,setCardId] = useState(null)





useEffect(()=>{


 if(!localStorage.getItem('products')){
 (async() => {const products = await fetch('productsJSON.json').then(response => response.json())


setProducts(products)

localStorage.setItem('products',JSON.stringify(products))


})()
}else{
  setProducts(JSON.parse(localStorage.getItem('products')))

}

}
  
  
  ,[])


const deleteCartItem =(id) =>{

  const index = products.findIndex(el => id === el.id)
  console.log(products[index])
  addCardsArr.splice(products[index],1)
 // state.isOpenModal = false
  console.log(addCardsArr)
  localStorage.setItem('addCards', JSON.stringify(addCardsArr))
  
  return setAddCards( JSON.parse(localStorage.getItem('addCards')))
}




   const openModal =(id)=>{
   console.log(id)
       setIsOpenModal(true)
      setCardId(id)} 
 
 const addtoFavorites =(id) => {
 console.log(products[0].addFavorites)

    const index = products.findIndex(el => id === el.id)
    console.log(products[index].addFavorites)

    if (products[index].addFavorites === false) {
   products[index].addFavorites = true
     addFavoritesArr.push(products[index])

console.log(products)
console.log(addFavoritesArr)
      localStorage.setItem('products', JSON.stringify(products))
      console.log(JSON.parse(localStorage.getItem('products')))
      localStorage.setItem('addFavorites', JSON.stringify(addFavoritesArr))

    } else {
     products[index].addFavorites = false
     addFavoritesArr.splice(products[index], 1)
      localStorage.setItem('products', JSON.stringify(products))
      localStorage.setItem('addFavorites', JSON.stringify(addFavoritesArr))

    }
setProducts(products)
setFavorites(JSON.parse(localStorage.getItem('addFavorites')))
  // return setState({...state})
  }


 

 const addCart=(id)=> {
  const index = products.findIndex(el => id === el.id)
  console.log(products[index])
addCardsArr.push(products[index])
 //isOpenModal=false
  console.log(addCardsArr)
  localStorage.setItem('addCards', JSON.stringify(addCardsArr))
    setAddCards( JSON.parse(localStorage.getItem('addCards')))
 setIsOpenModal(false)
 // return setState({...state})
}

  return (
 <>
         

    <div className='App'>
<Navigation addCards={addCardsArr.length} addFavoritesPage={addFavoritesArr.length} />
      
       <AppRoutes addFavorites={addFavoritesArr} products={products} openModal={openModal} addFavoritesFunc={addtoFavorites} deleteCartItem ={deleteCartItem}/>


      

    </div>

      {isOpenModal &&
          <Modal text={text} backgroundColor={backgroundColor} color={color} handleClick ={() =>{setIsOpenModal(false)}}  addCart={() => { addCart(cardId) }}></Modal >} 

    </>
  );
}


export default App

 