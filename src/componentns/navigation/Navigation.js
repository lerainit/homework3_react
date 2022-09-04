import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.scss'


const Navigation = (props)=>{

    return(
<header className={styles.header}>
    <NavLink to ='/' ><h2 className={styles.logo}>Fashion store</h2 ></NavLink>
<div className={styles.container}><NavLink to="/cart"><img className={styles.cart} src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2>Added cart:{props.addCards}</h2></NavLink>
<NavLink to="/favorites"><img className={styles.favorite_img} src="./star.png" alt="" /> <h2>Added favorites:{props.addFavoritesPage}</h2></NavLink>
     
     
     </div></header>)
}
export default Navigation