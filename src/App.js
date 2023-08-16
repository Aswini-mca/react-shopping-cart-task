import './App.css';
import { useState } from 'react';
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

  return (
    <div className="App">
      <h1>React Shopping Cart Task</h1>
      <Navbar />
      <Divheader />
      <div className='product-list'>
        {productList.map((pd) => (
          <Product product={pd} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

//navbar component
function Navbar() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className='navbar'>
      <ul>
        <li><a href='./App.js'>Navbar</a></li>
        <li><a href='./App.js'>Home</a></li>
        <li><a href='./App.js'>About</a></li>
        <li><a href='./App.js'>Shop &#9660;</a>
          <div className='dropdown'>
            <ul>
              <li><a href='./App.js'>All Products</a></li>
              <li><hr /></li>
              <li><a href='./App.js'>Popular Items</a></li>
              <li><a href='./App.js'>New Arrivals</a></li>
            </ul>
          </div></li>
      </ul>
      {() => setCartItems([...Product])}
      <button>🛒 Cart {cartItems.length}</button>
    </div>

  );
}
//below navbar head container
function Divheader() {
  return (
    <>
      <div className='head'>
        <h1>Shop in Style</h1>
        <p>Headphones Mart</p>
      </div>
    </>
  );
}
//product component used to create structure for products
function Product({ product }) {
  const [buttonText, setButtonText] = useState(true);
  return (
    <div className='product-container'>
      <img className='product-image' src={product.image} alt="Headphone" />
      <h4 className='product-title'>{product.title}</h4>
      <p className='product-rating'>{product.rating}</p>
      <h5 className='product-price'>{product.price}</h5>
      <button className='product-button' onClick={() => setButtonText(!buttonText)}>{buttonText ? "Add to Cart" : "Remove from Cart"}</button>
    </div>
  );
}
//footer component
function Footer() {
  return (
    <>
      <div className='footer'>
        <p>Copright © Headphones Mart 2023</p>
      </div>
    </>
  )
}
