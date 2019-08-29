var loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
var admin = JSON.parse(localStorage.getItem("admin"));

function reset() {
  if (loginStatus) {
    if (!admin) {
      $("#admin-info").empty();
      $("#admin-page").append(
        "<br><br><br><div class='container><div class='row'><div class='col-12 text-center'><h1>You do not have access to this page</h1></div></div></div>"
      );
    }
  } else {
    $("#admin-info").empty();
  }
}

reset();

function adminGetDrinks() {
  $.get("/api/inventory/drinks", function(data) {
    for (var i = 0; i < data.length; i++) {
      var newItem = $("<tr>");
      var name = $("<td>").text(data[i].name);
      var category = $("<td>").text(data[i].category);
      var type = $("<td>").text(data[i].type);
      var description = $("<td>").text(data[i].description);
      var smallPrice = $("<td>").text(data[i].smallPrice);
      var mediumPrice = $("<td>").text(data[i].mediumPrice);
      var largePrice = $("<td>").text(data[i].largePrice);
      var quantity = $("<td>").text(data[i].quantity);
      newItem
        .append(name)
        .append(category)
        .append(type)
        .append(description)
        .append(smallPrice)
        .append(mediumPrice)
        .append(largePrice)
        .append(quantity);
      $("#admin-items-table").append(newItem);
    }
  });
}

function adminGetFoods() {
  $.get("/api/inventory/foods", function(data) {
    for (var i = 0; i < data.length; i++) {
      var newItem = $("<tr>");
      var name = $("<td>").text(data[i].name);
      var category = $("<td>").text(data[i].category);
      var type = $("<td>").text(data[i].type);
      var description = $("<td>").text(data[i].description);
      var smallPrice = $("<td>").text(data[i].smallPrice);
      var mediumPrice = $("<td>").text(data[i].mediumPrice);
      var largePrice = $("<td>").text(data[i].largePrice);
      var quantity = $("<td>").text(data[i].quantity);
      newItem
        .append(name)
        .append(category)
        .append(type)
        .append(description)
        .append(smallPrice)
        .append(mediumPrice)
        .append(largePrice)
        .append(quantity);
      $("#admin-items-table").append(newItem);
    }
  });
}

function adminGetProducts() {
  $.get("/api/inventory/products", function(data) {
    for (var i = 0; i < data.length; i++) {
      var newItem = $("<tr>");
      var name = $("<td>").text(data[i].name);
      var category = $("<td>").text(data[i].category);
      var type = $("<td>").text(data[i].type);
      var description = $("<td>").text(data[i].description);
      var smallPrice = $("<td>").text(data[i].smallPrice);
      var mediumPrice = $("<td>").text(data[i].mediumPrice);
      var largePrice = $("<td>").text(data[i].largePrice);
      var quantity = $("<td>").text(data[i].quantity);
      newItem
        .append(name)
        .append(category)
        .append(type)
        .append(description)
        .append(smallPrice)
        .append(mediumPrice)
        .append(largePrice)
        .append(quantity);
      $("#admin-items-table").append(newItem);
    }
  });
}

adminGetDrinks();

$(document).ready(function() {
  $("#admin-drinks").on("click", function() {
    $("#admin-drinks").addClass("active disabled");
    $("#admin-foods").removeClass("active disabled");
    $("#admin-products").removeClass("active disabled");
    $("#admin-items-table").empty();
    adminGetDrinks();
  });

  $("#admin-foods").on("click", function() {
    $("#admin-foods").addClass("active disabled");
    $("#admin-drinks").removeClass("active disabled");
    $("#admin-products").removeClass("active disabled");
    $("#admin-items-table").empty();
    adminGetFoods();
  });

  $("#admin-products").on("click", function() {
    $("#admin-products").addClass("active disabled");
    $("#admin-drinks").removeClass("active disabled");
    $("#admin-foods").removeClass("active disabled");
    $("#admin-items-table").empty();
    adminGetProducts();
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

    var cat = $("#category")
      .val()
      .trim();
    $.post("/api/inventory", inventory).then(function() {
      console.log(cat);
      if (cat === "1") {
        $("#admin-drinks").addClass("active disabled");
        $("#admin-foods").removeClass("active disabled");
        $("#admin-products").removeClass("active disabled");
        $("#admin-items-table").empty();
        adminGetDrinks();
      } else if (cat === "2") {
        $("#admin-foods").addClass("active disabled");
        $("#admin-drinks").removeClass("active disabled");
        $("#admin-products").removeClass("active disabled");
        $("#admin-items-table").empty();
        adminGetFoods();
      } else {
        $("#admin-products").addClass("active disabled");
        $("#admin-drinks").removeClass("active disabled");
        $("#admin-foods").removeClass("active disabled");
        $("#admin-items-table").empty();
        adminGetProducts();
      }
    });

    $("#name").val("");
    $("#type").val("");
    $("#description").val("");
    $("#smallPrice").val("");
    $("#mediumPrice").val("");
    $("#largePrice").val("");
    $("#quantity").val("");
  }
});
