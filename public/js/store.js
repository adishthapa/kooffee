if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Remove Cart Items Button
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  console.log(removeCartItemButtons);
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Quantity Inputs
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add to Cart Button
  var addToCartButtons = document.getElementsByClassName("btn-chalk");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);

  function purchaseClicked() {
    alert("Thank you for your purchase!");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
  }
  // Remove Cart Items
  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  }
  // Changing quantity of Items
  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
  }
  // Adding Cart Function
  function addToCartClicked(event) {
    var button = event.target;
    var listItem = button.parentElement.parentElement;
    var title = listItem.getElementsById(
      "items-list-name-1-data" || "items-list-name-2-data"
    )[0].innerText;
    var price = listItem.getElementsById(
      "items-list-price-1-data" || "items-list-price-2-data"
    )[0].innerText;
    console.log(title, price);
    addItemToCart(title, price);
    updateCartTotal();
  }
  // Adding items to cart
  function addItemToCart(title, price) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    cartRow.innerText = title;
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("This item is already added to the cart!");
        return;
      }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-coulmn">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0],
      addEventListener("click", removeCartItem);
    cartRow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", quantityChanged);
  }
  // Updating Cart Total
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName("cart-price")[0];
      var quantityElement = cartRow.getElementsByClassName(
        "cart-quantity-input"
      )[0];
      console.log(priceElement, quantityElement);
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "$" + total;
  }
}
