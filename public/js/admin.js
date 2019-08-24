$("#admin-add-inventory").hide();
$("#admin-view-inventory").hide();

$("#admin-login").on("click", function() {
  $("#admin-home").hide();
  $("#admin-add-inventory").show();
  $("#admin-view-inventory").show();
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
      description: $("#description")
        .val()
        .trim(),
      smallPrice: $("#smallPrice")
        .val()
        .trim(),
      mediumPrice: $("#mediumPrice")
        .val()
        .trim(),
      largePrice: $("#largePrice")
        .val()
        .trim(),
      quantity: $("#quantity")
        .val()
        .trim()
    };

    $.post("/api/inventory", inventory);

    $("#name").val("");
    $("#type").val("");
    $("#description").val("");
    $("#smallPrice").val("");
    $("#mediumPrice").val("");
    $("#largePrice").val("");
    $("#quantity").val("");
  }
});
