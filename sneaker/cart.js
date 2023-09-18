// cart.js

// Define an empty array to store the cart items
var cartItems = [];

// Function to find an item in the cart based on its name
function findCartItem(name) {
    return cartItems.find(function(item) {
        return item.name === name;
    });
}

// Function to add a product to the cart
function addToCart(name, description, image) {
    // Check if the item already exists in the cart
    var existingItem = findCartItem(name);

    if (existingItem) {
        // If the item exists, increment the quantity
        existingItem.quantity++;
    } else {
        // If the item doesn't exist, create a new cart item object
        var item = {
            name: name,
            description: description,
            image: image,
            quantity: 1
        };

        // Add the item to the cartItems array
        cartItems.push(item);
    }
    
    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    var cartCount = document.getElementById("cartCount");

    // Calculate the total quantity of items in the cart
    var totalQuantity = cartItems.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    
    // Update the cart count
    cartCount.textContent = totalQuantity;

    // Store the cart items in the browser's local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


// Call the updateCartDisplay function initially to set up the cart display
updateCartDisplay();


// Call the displayCartItems function initially to set up the cart display
displayCartItems(); 

