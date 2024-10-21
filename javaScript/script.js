var cart = [];


function updateCartDisplay() {
    var cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = "";

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        updateTotalPrice();
        return;
    }

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        cartItemsDiv.innerHTML += `
            <div class="card mb-3 p-3 shadow-sm">
                <div class="d-flex justify-content-between align-items-center">
                    <img src="${item.img}" alt="${item.name}" style="width: 90px; height: 90px; object-fit: cover;" class="me-3 rounded">
                    <div class="flex-grow-1">
                        <h5 class="mb-1">${item.name}</h5>
                        <p class="text-muted mb-0">$${item.price} x ${item.quantity}</p>
                        <button class="btn btn-sm btn-danger mt-2" onclick="removeItem(${i})">Remove</button>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-danger me-2" onclick="updateQuantity(${i}, -1)">-</button>
                        <span class="px-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-success ms-2" onclick="updateQuantity(${i}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }

    updateTotalPrice();
    updateCartCounter();
}


var addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
for (var j = 0; j < addToCartButtons.length; j++) {
    addToCartButtons[j].addEventListener("click", function () {
        var productName = this.getAttribute("data-name");
        var productPrice = this.getAttribute("data-price");
        var productImg = this.getAttribute("data-img");

        var listItem = cart.find(function (item) {
            return item.name === productName;
        });

        if (listItem) {
            listItem.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: Number(productPrice),
                img: productImg,
                quantity: 1
            });
        }

        localStorage.setItem("cartItems", String(cart));
        updateCartDisplay();
    });
}


function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cartItems", String(cart));
    updateCartDisplay();
}


function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cartItems", String(cart));
    updateCartDisplay();
}


function updateCartCounter() {
    var cartQuantityBadge = document.getElementById('cartCounter');
    var totalItems = 0;

    for (var k = 0; k < cart.length; k++) {
        totalItems += cart[k].quantity;
    }

    cartQuantityBadge.innerText = totalItems === 0 ? 0 : totalItems;
}


function updateTotalPrice() {
    var totalPriceElement = document.getElementById("totalPrice");
    var totalPrice = 0;

    for (var l = 0; l < cart.length; l++) {
        totalPrice += cart[l].price * cart[l].quantity;
    }

    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
}


if (localStorage.getItem("cartItems")) {
    var storedCart = localStorage.getItem("cartItems").split(",");
    for (var i = 0; i < storedCart.length; i++) {
        var itemData = storedCart[i].split("|");
        cart.push({
            name: itemData[0],
            price: Number(itemData[1]),
            img: itemData[2],
            quantity: Number(itemData[3])
        });
    }
}

window.addEventListener('load', function () {
    updateCartDisplay();
    updateCartCounter();
});
