document.addEventListener("DOMContentLoaded", () => {
    const restaurants = [
        { id: 1, name: "Pizzeria Delights", cuisine: "Italian", rating: 4.5, image: "https://via.placeholder.com/300x200", description: "Delicious pizzas with fresh ingredients." },
        { id: 2, name: "Golden Dragon", cuisine: "Chinese", rating: 4.7, image: "https://via.placeholder.com/300x200", description: "Authentic Chinese flavors." },
        { id: 3, name: "Taco Fiesta", cuisine: "Mexican", rating: 4.2, image: "https://via.placeholder.com/300x200", description: "Spicy and flavorful Mexican dishes." },
        { id: 4, name: "Curry House", cuisine: "Indian", rating: 4.6, image: "https://via.placeholder.com/300x200", description: "Traditional Indian spices and flavors." },
        { id: 5, name: "Burger Haven", cuisine: "Fast Food", rating: 4.0, image: "https://via.placeholder.com/300x200", description: "Juicy burgers and crispy fries." }
    ];

    const restaurantList = document.getElementById("restaurant-list");

    function displayRestaurants(filter) {
        restaurantList.innerHTML = "";
        const filteredRestaurants = filter === "All" ? restaurants : restaurants.filter(rest => rest.cuisine === filter);

        filteredRestaurants.forEach(restaurant => {
            const card = document.createElement("div");
            card.classList.add("restaurant-card");
            card.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <div class="restaurant-info">
                    <h4>${restaurant.name}</h4>
                    <div class="restaurant-meta">
                        <span class="rating">⭐ ${restaurant.rating}</span>
                        <span>${restaurant.cuisine}</span>
                    </div>
                    <p>${restaurant.description}</p>
                    <a href="/restaurant/${restaurant.id}" class="view-menu">View Menu</a>
                </div>
            `;
            restaurantList.appendChild(card);
        });
    }

    window.filterRestaurants = function (cuisine) {
        document.querySelectorAll(".filter-button").forEach(button => {
            button.classList.remove("active");
            if (button.textContent === cuisine) {
                button.classList.add("active");
            }
        });
        displayRestaurants(cuisine);
    };

    displayRestaurants("All");
});


document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { id: 1, name: "Burger", description: "Juicy beef burger", price: 5.99, image: "https://via.placeholder.com/200", ingredients: ["Beef", "Lettuce", "Tomato", "Cheese"] },
        { id: 2, name: "Pizza", description: "Cheese-loaded pizza", price: 8.99, image: "https://via.placeholder.com/200", ingredients: ["Cheese", "Tomato Sauce", "Pepperoni"] },
        { id: 3, name: "Pasta", description: "Delicious Italian pasta", price: 7.49, image: "https://via.placeholder.com/200", ingredients: ["Pasta", "Olive Oil", "Garlic"] }
    ];

    const menuContainer = document.getElementById("menu-items");

    function renderMenu() {
        menuContainer.innerHTML = "";
        menuItems.forEach(item => {
            const col = document.createElement("div");
            col.className = "col-md-4 mb-4";

            col.innerHTML = `
                <div class="card menu-card">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class=" fw-bold item-price">$${item.price.toFixed(2)}</span>
                            <button class="btn btn-primary cart-btn" onclick="openItemModal(${item.id})">
                                <i class="fas fa-info-circle"></i> View Details
                            </button>
                        </div>
                    </div>
                </div>
            `;

            menuContainer.appendChild(col);
        });
    }

    window.openItemModal = (itemId) => {
        const item = menuItems.find(i => i.id === itemId);
        if (!item) return;

        document.getElementById("itemModalLabel").textContent = item.name;
        document.getElementById("item-image").src = item.image;
        document.getElementById("item-description").textContent = item.description;
        document.getElementById("item-price").textContent = `$${item.price.toFixed(2)}`;

        const ingredientsList = document.getElementById("item-ingredients");
        ingredientsList.innerHTML = "";
        item.ingredients.forEach(ing => {
            const li = document.createElement("li");
            li.textContent = ing;
            ingredientsList.appendChild(li);
        });

        document.getElementById("add-to-cart").onclick = () => alert(`${item.name} added to cart!`);

        const modal = new bootstrap.Modal(document.getElementById("itemModal"));
        modal.show();
    };

    renderMenu();
});


const cartItems = [
    { id: 1, name: "Pizza", price: 10.99, quantity: 1, image: "https://via.placeholder.com/50" },
    { id: 2, name: "Burger", price: 7.49, quantity: 2, image: "https://via.placeholder.com/50" }
];

function updateCartUI() {
    const cartContainer = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const orderSummary = document.getElementById("order-summary");

    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
        emptyCartMessage.style.display = "block";
        orderSummary.style.display = "none";
    } else {
        emptyCartMessage.style.display = "none";
        orderSummary.style.display = "block";

        let subtotal = 0;
        cartItems.forEach(item => {
            subtotal += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h5>${item.name}</h5>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
            `;

            cartContainer.appendChild(cartItem);
        });

        document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById("total").textContent = `$${(subtotal + 2.99).toFixed(2)}`;
    }
}

function changeQuantity(id, change) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            const index = cartItems.indexOf(item);
            cartItems.splice(index, 1);
        }
        updateCartUI();
    }
}

updateCartUI();
