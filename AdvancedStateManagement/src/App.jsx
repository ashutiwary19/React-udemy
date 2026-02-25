import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
// import { CartContext } from "./store/shopping-cart.jsx";
import CartContextProvider from "./store/shopping-cart.jsx";
function App() {
  /*
  return (
    // React 19 or Higher
    { <CartContext
      value={{
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateCartItemQuantity: handleUpdateCartItemQuantity,
      }}
    >
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContext>
  ); }*/

  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

// For React 18 or Lower, use CartContext.Provider instead of CartContext
// <CartContext.Provider
//   value={{
//     items: shoppingCart.items,
//     addItemToCart: handleAddItemToCart,
//     updateCartItemQuantity: handleUpdateCartItemQuantity,
//   }}
// >
//   <Header
//     cart={shoppingCart}
//     onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
//   />
//   <Shop>
//     {DUMMY_PRODUCTS.map((product) => (
//       <li key={product.id}>
//         <Product {...product} onAddToCart={handleAddItemToCart} />
//       </li>
//     ))}
//   </Shop>
// </CartContext.Provider>

export default App;
