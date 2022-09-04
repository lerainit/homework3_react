
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
 
 const [text,setText] = useState('Are  you sure you want to add this product to cart?')
  const[ backgroundColor,setBackgroundColor] = useState('cadetblue')
 const[ color,setColor] =useState('green')
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

 //
 //



/*
export default App;
import './App.scss';
import React, { Component } from 'react';
import Modal from './components/modal/Modal';
import ProductPage from './components/productpage/productPage';
import initLocalStorage from './getProducts';
import PropTypes from 'prop-types'

initLocalStorage()



class App extends Component {
  state = {

    isOpenModal: false,
    products: [],
    text: 'Are  you sure you want to add this product to cart?',
    backgroundColor: 'cadetblue',
    color: 'green',
    cardId: null,
    addCardsArr: JSON.parse(localStorage.getItem('addCards')),
    addFavoritesArr: JSON.parse(localStorage.getItem('addFavorites')),



  }

  async componentDidMount() {

    const products = await fetch('productsJSON.json').then(response => response.json())

    if (!localStorage.getItem('products')) {
      this.setState((current) => {

        const newState = { ...current }
        newState.products = products
        return newState
      }

      )


      localStorage.setItem('products', JSON.stringify(products))


    } else {

      this.setState((current) => {

        const newState = { ...current }
        newState.products = JSON.parse(localStorage.getItem('products'))
        return newState
      }

      )

    }


  }

  clearCart = () => {
    localStorage.setItem('addCards', JSON.stringify([]))
    this.setState((current) => {

      const newState = { ...current }
      newState.addCardsArr = []
      return newState
    })

  }

  clearFavorites = () => {

    localStorage.setItem('addFavorites', JSON.stringify([]))
    this.setState((current) => {

      const newState = { ...current }


      newState.addFavoritesArr = []
      return newState
    })
    let productsArr = JSON.parse(localStorage.getItem('products'))

    productsArr.forEach(el => el.addFavorites = false)


    localStorage.setItem('products', JSON.stringify(productsArr))
    this.setState({ products: productsArr })
  }


  addtoFavorites = (id) => {
    this.setState((current) => {

      const newState = { ...current }

      const index = current.products.findIndex(el => id === el.id)
      if (newState.products[index].addFavorites === false) {
        newState.products[index].addFavorites = true
        newState.addFavoritesArr.push(newState.products[index])

        localStorage.setItem('products', JSON.stringify(newState.products))
        localStorage.setItem('addFavorites', JSON.stringify(newState.addFavoritesArr))

      } else {
        newState.products[index].addFavorites = false
        newState.addFavoritesArr.splice(newState.products[index], 1)
        localStorage.setItem('products', JSON.stringify(newState.products))
        localStorage.setItem('addFavorites', JSON.stringify(newState.addFavoritesArr))

      }

      return newState
    })

  }
  openModal = (id) => {

    this.setState({ isOpenModal: true, cardId: id })

  }
  addCart(id) {
  
    this.setState((current) => {

      const newState = { ...current }

      const index = newState.products.findIndex(el => id === el.id)
      console.log(newState.products)
      newState.addCardsArr.push(newState.products[index])
      newState.isOpenModal = false
      localStorage.setItem('addCards', JSON.stringify(newState.addCardsArr))
      console.log(newState.addCardsArr)
      return newState
    })
  }

  render() {
    const { text, backgroundColor, color, addCardsArr, addFavoritesArr, isOpenModal, cardId, products } = this.state


    return (

      <>

        <div className='App'>
         

          <ProductPage addCards={addCardsArr.length} addFavoritesPage={addFavoritesArr.length} products={products} openModal={this.openModal} addFavoritesFunc={this.addtoFavorites} clearFavorites={this.clearFavorites} clearCart={this.clearCart} ></ProductPage>


          </div>

          {isOpenModal && <Modal text={text} backgroundColor={backgroundColor} color={color} handleClick={() => { this.setState({ isOpenModal: false }) }} addCart={() => { this.addCart(cardId) }}></Modal>}






      </>


 )


 }




}*/

//<ProductPage addCards={state.addCardsArr.length} addFavoritesPage={state.addFavoritesArr.length} products={state.products} openModal={openModal} addFavoritesFunc={addtoFavorites} clearFavorites={clearFavorites} clearCart={clearCart} ></ProductPage>


//{state.isOpenModal &&
   //<Modal text={state.text} backgroundColor={state.backgroundColor} color={state.color} handleClick ={() =>{setState({...state,isOpenModal:false})}}  addCart={() => { addCart(state.cardId) }}></Modal >} 


//</div>
//<Cart addCards={JSON.parse(localStorage.getItem('addCards'))} deleteCartItem ={deleteCartItem}></Cart>
