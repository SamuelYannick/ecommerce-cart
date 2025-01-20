// Component to render a list of products
function ProductList({ products, addToCart }) {
    return (
    <div className="product-list">
        <h2>Products</h2>
        {/* Map over each procut and display it */}
        {products.map(product => (
            <div key={product.id} className="product-item">
                <span>{product.name}</span>
                <span>{product.price}</span>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ))}
    </div>
    );
}

export default ProductList;