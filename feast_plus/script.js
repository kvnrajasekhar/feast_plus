$(document).ready(function() {

    const fooditem = [
        { id: 1, name: "Pizzeria Delights", cuisine: "Italian", rating: 4.5, image: "../products/img/Pizzeria Delights.jfif", description: "Delicious pizzas with fresh ingredients." },
        { id: 2, name: "Golden Dragon", cuisine: "Chinese", rating: 4.7, image: "../products/img/Golden Dragon.jpg", description: "Authentic Chinese flavors." },
        { id: 3, name: "Taco Fiesta", cuisine: "Mexican", rating: 4.2, image: "../products/img/Taco Fiesta.jfif", description: "Spicy and flavorful Mexican dishes." },
        { id: 4, name: "Paneer Butter Masala", cuisine: "Mexican", rating: 4.6, image: "../products/img/Paneer Butter Masala.jfif", description: "Made with Indian spices and flavors." },
        { id: 5, name: "Burger Haven", cuisine: "Fast Food", rating: 4.0, image: "../products/img/Burger.jfif", description: "Juicy burgers and crispy fries." },

        { id: 6, name: "Vegetable Biryani", cuisine: "Indian", rating: 4.3, image: "../products/img/vegetable-biryani.jpg", description: "Aromatic rice with fresh vegetables." },
        { id: 7, name: "Veg Meals", cuisine: "Indian", rating: 4.5, image: "../products/img/veg-meals-1.jpg", description: "A wholesome vegetarian meal." },
        { id: 8, name: "Curd Rice", cuisine: "Indian", rating: 4.2, image: "../products/img/curd-rice.jfif", description: "Refreshing curd rice with spices." },

        // New items from nonveg.html
        { id: 9, name: "Dum Biryani", cuisine: "Mexican", rating: 4.8, image: "../products/img/dum_biryani.jfif", description: "Flavorful dum-cooked biryani." },
        { id: 10, name: "Chicken 65", cuisine: "Indian", rating: 4.6, image: "../products/img/chicken_65.jfif", description: "Spicy and crispy chicken bites." },

        // New items from tiffins.html
        { id: 11, name: "Dosa", cuisine: "Indian", rating: 4.4, image: "../products/img/dosa.jfif", description: "Crispy dosa served with chutney." },
        { id: 12, name: "Idly", cuisine: "Indian", rating: 4.5, image: "../products/img/idly.jfif", description: "Soft and fluffy idly with sambar." },
        { id: 13, name: "Sushi Delight", cuisine: "Chinese", rating: 4.8, image: "../products/img/Sushi Delight.jfif", description: "Fresh and authentic sushi rolls." },
        { id: 14, name: "Pad Thai", cuisine: "Mexican", rating: 4.6, image: "../products/img/Pad Thai.jfif", description: "Classic Thai stir-fried noodles." },
        { id: 15, name: "Shawarma Wrap", cuisine: "Italian", rating: 4.5, image: "../products/img/Shawarma Wrap.jfif", description: "Savory and flavorful shawarma wraps." },
        { id: 16, name: "Greek Salad", cuisine: "Mexican", rating: 4.3, image: "../products/img/Greek Salad.jfif", description: "Fresh and healthy Greek salad." },
        { id: 17, name: "Ramen Bowl", cuisine: "Italian", rating: 4.7, image: "../products/img/Ramen Bowl.jfif", description: "Warm and comforting ramen noodles." },
        { id: 18, name: "Falafel Platter", cuisine: "Chinese", rating: 4.4, image: "../products/img/Falafel Platter.jfif", description: "Crispy falafels with hummus and pita." },
        { id: 19, name: "Tom Yum Soup", cuisine: "Chinese", rating: 4.5, image: "../products/img/Tom Yum Soup.jfif", description: "Spicy and tangy Thai soup." },
        { id: 20, name: "Baklava", cuisine: "Chinese", rating: 4.6, image: "../products/img/Baklava.jfif", description: "Sweet and flaky Greek dessert." }
    ];

    const $restaurantList = $("#restaurant-list");

    function displayRestaurants(filter) {
        $restaurantList.empty();
        const filteredRestaurants = filter === "All" ? fooditem : fooditem.filter(rest => rest.cuisine === filter);

        $.each(filteredRestaurants, function(index, restaurant) {
            const $card = $("<div>").addClass("restaurant-card").html(`
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <div class="restaurant-info">
                    <h4>${restaurant.name}</h4>
                    <div class="restaurant-meta">
                        <span class="rating">⭐ ${restaurant.rating}</span>
                        <span>${restaurant.cuisine}</span>
                    </div>
                    <p>${restaurant.description}</p>
                    <a href="../restaurant-menu/resto.html" class="view-menu">View Menu</a>
                </div>
            `);
            $restaurantList.append($card);
        });
    }

    window.filterRestaurants = function (cuisine) {
        $(".filter-button").each(function() {
            $(this).removeClass("active");
            if ($(this).text() === cuisine) {
                $(this).addClass("active");
            }
        });
        displayRestaurants(cuisine);
    };

    displayRestaurants("All");
});



$(document).ready(function() {

    const menuItems = [
        {
            id: 1,
            name: "McDonald's",
            description: "Fast Food restaurant located at 123 Main St, Chennai",
            price: 5.99,
            distance: "2 km",
            image: "../restaurant-menu/food-images/mcd.jpg",
            rating: 4.2,
            cuisine: "Fast Food",
            menuUrl: "/restaurant/mcdonalds",
            ingredients: ["Burger Patty", "Lettuce", "Cheese", "Bun"]
        },
        {
            id: 2,
            name: "Domino's Pizza",
            description: "Pizza restaurant located at 456 Elm St, Chennai",
            price: 8.99,
            distance: "3 km",
            image: "../restaurant-menu//food-images/dominos.jpg",
            rating: 4.5,
            cuisine: "Pizza",
            menuUrl: "/restaurant/dominos",
            ingredients: ["Cheese", "Tomato Sauce", "Pepperoni", "Dough"]
        },
        {
            id: 3,
            name: "Cafe Coffee Day",
            description: "Cafe located at 789 Oak St, Chennai",
            price: 4.99,
            distance: "1.5 km",
            image: "../restaurant-menu//food-images/cafe coffe.png",
            rating: 3.9,
            cuisine: "Cafe",
            menuUrl: "/restaurant/ccd",
            ingredients: ["Coffee Beans", "Milk", "Sugar", "Water"]
        }
    ];

    const $menuContainer = $("#menu-items");

    function renderMenu() {
        $menuContainer.empty();
        $.each(menuItems, function(index, item) {
            const $col = $("<div>").addClass("col-md-4 mb-4").html(`
                <div class="card menu-card">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class=" fw-bold item-price">$${item.price.toFixed(2)}</span>
                            <button class="btn btn-primary cart-btn" data-item-id="${item.id}">
                                <i class="fas fa-info-circle"></i> View Details
                            </button>
                        </div>
                    </div>
                </div>
            `);
            $menuContainer.append($col);
        });

        $(".cart-btn").on("click", function() {
            const itemId = $(this).data("item-id");
            openItemModal(itemId);
        });
    }

    window.openItemModal = function(itemId) {
        const item = menuItems.find(i => i.id === itemId);
        if (!item) return;

        $("#itemModalLabel").text(item.name);
        $("#item-image").attr("src", item.image);
        $("#item-description").text(item.description);
        $("#item-price").text(`$${item.price.toFixed(2)}`);

        const $ingredientsList = $("#item-ingredients").empty();
        $.each(item.ingredients, function(index, ing) {
            $("<li>").text(ing).appendTo($ingredientsList);
        });

        $("#add-to-cart").off("click").on("click", function() {
            window.location.href = "../products/product.html";
        });

        const modal = new bootstrap.Modal($("#itemModal")[0]);
        modal.show();
    };

    renderMenu();
});



// cart section
$(document).ready(function() {
    const cartItems = [
        { id: 1, name: "Pizza", price: 10.99, quantity: 1, image: "../products/img/Pizzeria Delights.jfif" },
        { id: 2, name: "Burger", price: 7.49, quantity: 2, image: "../products/img/Burger.jfif" }
    ];

    const $cartContainer = $("#cart-items");
    const $emptyCartMessage = $("#empty-cart-message");
    const $orderSummary = $("#order-summary");
    const $subtotal = $("#subtotal");
    const $total = $("#total");

    function updateCartUI() {
        $cartContainer.empty();

        if (cartItems.length === 0) {
            $emptyCartMessage.show();
            $orderSummary.hide();
        } else {
            $emptyCartMessage.hide();
            $orderSummary.show();

            let subtotalValue = 0;
            $.each(cartItems, function(index, item) {
                subtotalValue += item.price * item.quantity;

                const $cartItem = $("<div>").addClass("cart-item").html(`
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h5>${item.name}</h5>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="quantity-controls">
                        <button class="decrease-qty" data-item-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-qty" data-item-id="${item.id}">+</button>
                    </div>
                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                `);
                $cartContainer.append($cartItem);
            });

            $subtotal.text(`$${subtotalValue.toFixed(2)}`);
            $total.text(`$${(subtotalValue + 2.99).toFixed(2)}`);

            // Attach event listeners for quantity changes after the elements are added
            $(".decrease-qty").off("click").on("click", function() {
                const itemId = parseInt($(this).data("item-id"));
                changeQuantity(itemId, -1);
            });

            $(".increase-qty").off("click").on("click", function() {
                const itemId = parseInt($(this).data("item-id"));
                changeQuantity(itemId, 1);
            });
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
});
