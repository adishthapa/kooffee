$("#admin-add-inventory").hide();
$("#admin-view-inventory").hide();

$("#admin-login").on("click", function() {
  $("#admin-home").hide();
  $("#admin-add-inventory").show();
  $("#admin-view-inventory").show();
});

$(document).ready(function() {
  $("#admin-drinks").on("click", function() {
    $("#admin-drinks").addClass("active disabled");
    $("#admin-foods").removeClass("active disabled");
    $("#admin-products").removeClass("active disabled");
  });

  $("#admin-foods").on("click", function() {
    $("#admin-foods").addClass("active disabled");
    $("#admin-drinks").removeClass("active disabled");
    $("#admin-products").removeClass("active disabled");
  });

  $("#admin-products").on("click", function() {
    $("#admin-products").addClass("active disabled");
    $("#admin-drinks").removeClass("active disabled");
    $("#admin-foods").removeClass("active disabled");
  });

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
