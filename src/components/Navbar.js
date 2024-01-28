//navbar component
export function Navbar({ itemCount }) {
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
      <button>🛒 Cart {itemCount}</button>
    </div>

  );
}
