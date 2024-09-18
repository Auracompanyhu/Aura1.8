let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice,) {
    const size = document.getElementById('size').value;
    const pattern = document.getElementById('pattern').value;
    const productImage = document.getElementById('main-image').src;
    cart.push({ name: productName, price: productPrice, size: size, pattern: pattern, image: productImage, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    displayCartContents();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
    cartCount.innerText = itemCount;
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay();
    displayCartContents();
}

function displayCartContents() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;" />
            <span>${product.name} (Size: ${product.size}, Pattern: ${product.pattern})</span>
            <span>$${product.price} x ${product.quantity}</span>
            <button class="remove-btn" onclick="removeItem('${product.name}', '${product.size}', '${product.pattern}')">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function removeItem(productName, size, pattern) {
    cart = cart.filter(product => !(product.name === productName && product.size === size && product.pattern === pattern));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    displayCartContents();
}
document.addEventListener('DOMContentLoaded', loadCart);
console.log(product.image);
