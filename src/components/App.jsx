import {useState} from "react";
import ProductList from "./ProductList.jsx";
import Cart from "./Cart.jsx";

const products = [
    {id: 1, name: "T-Shirt", price: 20},
    {id: 2, name: "Jeans", price: 40},
    {id: 3, name: "Sneakers", price: 60},
    {id: 4, name: "Hat", price: 15},
    {id: 5, name: "Socks", price: 5}
];

function App() {
    // Cart state to manage items added to the cart
    const [cart, setCart] = useState([]);

    // Add a product to the cart or update the quantity if it already exists
    function addToCart(product) {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                item.id === product.id ? {...item, quantity: item.quantity + 1 } : item
            );
            }
            return [...prevCart, {...product, quantity: 1}];
        });
    };

    // Update the quantity of an item in the cart
    function updateQuantity(id, quantity) {
      if (quantity < 1) return;
        setCart((prevCart) => 
          prevCart.map((item) => (item.id === id ? {...item, quantity} : item))
    );
  };

    // Remove an item from the cart
    function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
        <h1>Simple E-Commerce Cart</h1>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;