//Component to render the shopping cart
function Cart({cartItems, updateQuantity, removeFromCart}) {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {/* If the cart is empty, display a message */}
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                   {/* Map over cart items and display each item */}
                   {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <span>Quantity: {item.quantity}</span>
                        {/* Buttons to adjust quantity and remove the item */}
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                   ))}
                   <h3>Total Price: ${totalPrice}</h3>
                </>
            )}
        </div>
    );
}

export default Cart;