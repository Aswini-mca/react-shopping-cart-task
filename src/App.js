import './App.css';
import { useState } from 'react';
import { Navbar } from './components/Navbar.js';
import { Divheader } from './components/Divheader.js';
import { Product } from './components/Product.js';
import { Footer } from './components/Footer.js';

//product array of objects list
const INITAL_PRODUCT_LIST = [
  {
    image: "https://m.media-amazon.com/images/I/51YOeZehIKL._SX679_.jpg",
    title: "boAt Airdopes 170",
    rating: "⭐⭐⭐",
    price: "₹1,399"
  },
  {
    image: "https://m.media-amazon.com/images/I/51DclWv+E3L._SX679_.jpg",
    title: "realme Buds Air 3",
    rating: "⭐⭐⭐⭐",
    price: "₹3,999"
  },
  {
    image: "https://m.media-amazon.com/images/I/51hr-iGexrL._SX679_.jpg",
    title: "Noise Buds",
    rating: "⭐⭐⭐⭐",
    price: "₹1,499"
  },
  {
    image: "https://m.media-amazon.com/images/I/51N9AanRw+L._SX679_.jpg",
    title: "PTron Bassbuds",
    rating: "⭐⭐⭐",
    price: "₹799"
  },
  {
    image: "https://m.media-amazon.com/images/I/51hr-iGexrL._SX679_.jpg",
    title: "OnePlus Nord Buds",
    rating: "⭐⭐⭐⭐",
    price: "₹2,199"
  },
  {
    image: "https://m.media-amazon.com/images/I/611BCw7ulaL._SX679_.jpg",
    title: "OnePlus Nord Buds 2r",
    rating: "⭐⭐⭐",
    price: "₹2,199"
  },
  {
    image: "https://m.media-amazon.com/images/I/31Sx7+mu+vL._SY300_SX300_.jpg",
    title: "Samsung Galaxy Buds",
    rating: "⭐⭐⭐⭐",
    price: "₹3,990"
  },
  {
    image: "https://m.media-amazon.com/images/I/615ekapl+pL._SX679_.jpg",
    title: "Apple AirPods",
    rating: "⭐⭐⭐⭐",
    price: "₹19,600"
  }
]

export default function App() {
  const productList = INITAL_PRODUCT_LIST;
  let [itemCount,setItemCount] = useState(0);

  let increase = () => {
     setItemCount(itemCount + 1);
     window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  }

  let decrease = () => {
    setItemCount(itemCount - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
 }

  return (
    <div className="App">
      <h1>React Shopping Cart Task</h1>
      <Navbar  itemCount={itemCount}/>
      <Divheader />
      <div className='product-list'>
        {productList.map((pd) => (
          <Product product={pd} increase={increase} decrease={decrease}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

