// import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
// import { CartContext } from './store/shopping-cart-context.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  return (
    <>
      {/* <CartContext> <- No need to use .Provider for React 19 and above */}
      {/* <CartContext value={ctxValue}> <- Changed to CartContextProvider component */}
      <CartContextProvider>
        {/* <Header
          cart={shoppingCart}
          onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        /> */}
        <Header />
        {/* <Shop onAddItemToCart={handleAddItemToCart}> <- Not needed to pass handleAddItemToCart pointer to Shop component anymore */}
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              {/* <Product {...product} onAddToCart={handleAddItemToCart} /> */}
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
      {/* </CartContext> */}
    </>
  );
}

export default App;
