// script.js
// Fetch products from a backend API (simulated data)
const products = [
    { id: 1, name: 'Product A', price: 19.99 },
    // Add more products
];

// Display products on the page
function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productItem);
    });
}

// Add a product to the cart
function addToCart(productId) {
    // Implement cart logic here
    console.log(`Added product with ID ${productId} to the cart.`);
}

// Call displayProducts() when the page loads
window.addEventListener('load', displayProducts);
