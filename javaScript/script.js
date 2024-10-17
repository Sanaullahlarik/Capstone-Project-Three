// let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// document.querySelectorAll('.addToCartBtn').forEach((btn) => {
//   btn.addEventListener('click', function() {
//     // Get product info from the card
//     let productCard = btn.closest('.container');
//     let productName = productCard.querySelector('p').innerText;
//     let productPrice = productCard.querySelector('h6').innerText;

//     // Add the product to cart
//     cartItems.push({
//       name: productName,
//       price: productPrice
//     });

//     // Save updated cart to localStorage
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));

//     alert(${productName} has been added to your cart!);
//   });
// });