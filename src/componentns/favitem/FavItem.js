import React from "react";
import styles from './FavItem.module.scss'


const FavItem =(props) =>{
    return(
        <>
        
        <ul>
            <li><span>Name:</span>{props.name}</li>
            <li><span>Price:</span>{props.price}</li>
            <li><img className={styles.image} src={props.url}   alt = 'Product '/></li>
            <li><span>Art:</span>{props.art}</li>
            </ul>
</>
)
}
export default FavItem