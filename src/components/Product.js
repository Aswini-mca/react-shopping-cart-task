import { useState } from 'react';

//product component used to create structure for products
export function Product({ product, increase, decrease }) {
  const [showButtonInc, setShowButtonInc] = useState(true);
  const [showButtonDec, setShowButtonDec] = useState(false);

  return (
    <div className='product-container'>
      <img className='product-image' src={product.image} alt="Headphone" />
      <h4 className='product-title'>{product.title}</h4>
      <p className='product-rating'>{product.rating}</p>
      <h5 className='product-price'>{product.price}</h5>
      {showButtonInc && (
        <button className='product-button' onClick={() => {
          increase();
          setShowButtonInc(false);
          setShowButtonDec(true);
        }}>
          Add to Cart
        </button>
      )}

      {showButtonDec && (
        <button className='product-button' onClick={() => {
          decrease();
          setShowButtonInc(true);
          setShowButtonDec(false);
        }}>
          Remove from Cart
        </button>
      )}
    </div>
  );
}
