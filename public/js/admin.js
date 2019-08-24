$("#admin-add-inventory").hide();

$("#admin-login").on("click", function() {
  $("#admin-home").hide();
  $("#admin-add-inventory").show();
});

$(document).ready(function() {
  $(document).on("submit", "#inventory-form", insertInventory);
  function insertInventory(event) {
    event.preventDefault();
    var inventory = {
      name: $("#name")
        .val()
        .trim(),
      category: $("#category")
        .val()
        .trim(),
      type: $("#type")
        .val()
        .trim(),
      price: $("#price")
        .val()
        .trim(),
      quantity: $("#quantity")
        .val()
        .trim()
    };

    $.post("/api/inventory", inventory);

    $("#name").val("");
    $("#type").val("");
    $("#price").val("");
    $("#quantity").val("");
  }
});
