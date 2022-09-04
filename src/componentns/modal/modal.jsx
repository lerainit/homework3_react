
import React from 'react'
import styles from './modal.module.scss'


const  Modal = (props) => {
  
   

return(


<div className={styles.modal}>
  <div className={styles.outer_container} onClick ={props.handleClick}></div>
  <div className={styles.modal_main_container} >
 
<button className={styles.close_btn} onClick ={props.handleClick}>X</button>

<p>{props.text}</p>
<button className={styles.modal_btn} onClick ={props.addCart} >Add to cart</button>
</div>
</div>



  ) 

}


export default Modal