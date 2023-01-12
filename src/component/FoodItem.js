import React from 'react';
import  styles from "../component/foodItems.module.css"

 const FoodItem = (props) => {
  function foodOrderHandler(){
    console.log('Your order for ', props.name, ' is succesful');
    if(props.price >199){
        console.log('Total amount due: ', props.price)
    }
    else{
        console.log('Delivery Charge 40 Rs applicable!')
        console.log('Total amount due: ', props.price + 40)
        
    }
}
  return (
    
    <div className={styles.foodCard} onClick={foodOrderHandler}>
          <div className={styles.foodCardHeader}>
          <img src={props.img} alt="img" className={styles.foodCardImg}/>
          <p className={props.ratings>=4.4?"mustTry":"dNone"}>Must Try</p>
          </div>
         <h3 className=''>{props.name}</h3>
         <h4>₹ {props.price}</h4>
         <p>{props.read}</p>
    </div>
  )
}


export default FoodItem;