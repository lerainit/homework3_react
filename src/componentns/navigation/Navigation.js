import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.scss'


const Navigation = (props)=>{

    return(
<header className={styles.header}>
    <NavLink className={styles.logo} to ='/' ><h2 >Fashion store</h2 ></NavLink>
<div className={styles.container}><NavLink className={styles.cart_link}  to="/cart"><img className={styles.cart}  src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2> CART:{props.addCards}</h2></NavLink>
<NavLink className={styles.fav_link} to="/favorites"><img className={styles.favorite_img} src="./star.png" alt="" /> <h2>FAVORITES:{props.addFavoritesPage}</h2></NavLink>
     
     
     </div></header>)
}
export default Navigation