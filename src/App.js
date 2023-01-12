
import './App.css';
import  FoodItem  from './component/FoodItem';

let foodItems= [
                {name:"Veg Supreme Pizza",price:499,ratings:4.3,img:"https://source.unsplash.com/1600x700/?pizza",read:"Onion, capsicum, tomato, mushroom, black olive, golden corn and spicy jalapeno"},
                {name:"Veg Sandwich",price:99,ratings:4.5,img:"https://source.unsplash.com/1600x700/?sandwich",read:"Aloo patty seasoned with special herbs and spices, paired with your choice of your favourite nutritious veggies, on a freshly baked bread."},
                {name:"Veg Noodles",price:250,ratings:4.2,img:"https://source.unsplash.com/1600x700/?noodles",read:"Malabar biryani is a Kerala Style Chicken Curry that is creamy, delicious, and goes well with roti, appam, ghee rice, or parotta."},
                {name:"Veg Biryani",price:299,ratings:4.4,img:"https://source.unsplash.com/1600x700/?biryani",read:"In meal tray. Hyderabadi veg biryani is a delicious medley of succulent vegetables, spices, ghee, saffron, and flavourful basmati rice which no one can resist. Hyderabadi biryani "},
                {name:"Veg Maharaja Burger",price:399,ratings:4.6,img:"https://source.unsplash.com/1600x700/?burger",read:"Fresh handmade dough, capsicum, tandoori paneer, paprika and tandoor mayo."},
                {name:"Veg Machurian",price:199,ratings:4.2,img:"https://source.unsplash.com/1600x700/?manchurian",read:"Fresh handmade machurian, capsicum, tandoori paneer, paprika and tandoor mayo."},
                {name:"Garlic Bread",price:99,ratings:4.4,img:"https://source.unsplash.com/1600x700/?garlicbread",read:"An Italian meal isn't complete without a little cheesy garlic bread - that too this half moon delight is made with whole wheat flour! "},
                {name:"Veg Dosa",price:199,ratings:4.4,img:"https://source.unsplash.com/1600x700/?dosa",read:"The World's favourite south indian dosa with fresh touch "},]




function App() {
  
  return (
    <div>
    <div className="app">
          <h1>Welcome to Food Court Enjoy  !!</h1>
      </div>
     <div className='container'>
      { foodItems.map((item)=>{
        return <FoodItem name={item.name} img={item.img} price={item.price} read={item.read}
        ratings={item.ratings}/>
      })
      }

    </div>
     
     </div>
  );
}

export default App;
