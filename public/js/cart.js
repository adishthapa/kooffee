var userId = JSON.parse(localStorage.getItem("userId"));
console.log(userId);

function fillCart() {
  $.get("/api/checkout/" + userId, function(data) {
    if (data) {
      console.log(data);
      var total = 0;
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        var name = $("<p>").text(data[i].itemName);
        $("#item-name").append(name);
        var quantity = $("<p>").text(data[i].quantity);
        $("#item-quantity").append(quantity);
        var price = $("<p>").text(data[i].total);
        $("#item-price").append(price);
        total += Number(data[i].total);
      }
      $("#cart-total-price").text(total);
    }
  });
}
$(document).ready(function() {
  fillCart();
});
