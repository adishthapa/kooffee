function getDrinks() {
  $.get("/api/inventory/drinks", function(data) {
    for (var i = 0; i < 5; i++) {
      if (data[i]) {
        var link = $("<a>")
          .attr("data-id", data[i].id)
          .attr("href", "#modal-inventory")
          .addClass("inventory-item");
        var name = $("<h5>").text(data[i].name);
        link.append(name);
        $("#items-list-name-1-data")
          .append(link)
          .append("<br>");
        var price = $("<h5>").text(
          "S: $" +
            data[i].smallPrice +
            " |" +
            " M: $" +
            data[i].mediumPrice +
            " |" +
            " L: $" +
            data[i].largePrice
        );
        $("#items-list-price-1-data")
          .append(price)
          .append("<br>");
      } else {
        break;
      }
    }
    for (var i = 5; i < 10; i++) {
      if (data[i]) {
        var link = $("<a>")
          .attr("data-id", data[i].id)
          .attr("href", "#modal-inventory")
          .addClass("inventory-item");
        var name = $("<h5>").text(data[i].name);
        link.append(name);
        $("#items-list-name-2-data")
          .append(link)
          .append("<br>");
        var price = $("<h5>").text(
          "S: $" +
            data[i].smallPrice +
            " |" +
            " M: $" +
            data[i].mediumPrice +
            " |" +
            " L: $" +
            data[i].largePrice
        );
        $("#items-list-price-2-data")
          .append(price)
          .append("<br>");
      } else {
        break;
      }
    }
  });
}

function getFoods() {
  $.get("/api/inventory/foods", function(data) {
    for (var i = 0; i < 5; i++) {
      if (data[i]) {
        var link = $("<a>")
          .attr("data-id", data[i].id)
          .attr("href", "#modal-inventory")
          .addClass("inventory-item");
        var name = $("<h5>").text(data[i].name);
        link.append(name);
        $("#items-list-name-1-data")
          .append(link)
          .append("<br>");
        var price = $("<h5>").text("$" + data[i].mediumPrice);
        $("#items-list-price-1-data")
          .append(price)
          .append("<br>");
      } else {
        break;
      }
    }
    for (var i = 5; i < 10; i++) {
      if (data[i]) {
        var link = $("<a>")
          .attr("data-id", data[i].id)
          .attr("href", "#modal-inventory")
          .addClass("inventory-item");
        var name = $("<h5>").text(data[i].name);
        link.append(name);
        $("#items-list-name-2-data")
          .append(link)
          .append("<br>");
        var price = $("<h5>").text("$" + data[i].mediumPrice);
        $("#items-list-price-2-data")
          .append(price)
          .append("<br>");
      } else {
        break;
      }
    }
  });
}

function getProducts() {
  $.get("/api/inventory/products", function(data) {
    for (var i = 0; i < 5; i++) {
      if (data[i]) {
        var link = $("<a>")
          .attr("data-id", data[i].id)
          .attr("href", "#modal-inventory")
          .addClass("inventory-item");
        var name = $("<h5>").text(data[i].name);
        link.append(name);
        $("#items-list-name-1-data")
          .append(link)
          .append("<br>");
        var price = $("<h5>").text("$" + data[i].mediumPrice);
        $("#items-list-price-1-data")
          .append(price)
          .append("<br>");
      } else {
        break;
      }
    }
    for (var i = 5; i < 10; i++) {
      if (data[i]) {
        var link = $("<a>")
          .attr("data-id", data[i].id)
          .attr("href", "#modal-inventory")
          .addClass("inventory-item");
        var name = $("<h5>").text(data[i].name);
        link.append(name);
        $("#items-list-name-2-data")
          .append(link)
          .append("<br>");
        var price = $("<h5>").text("$" + data[i].mediumPrice);
        $("#items-list-price-2-data")
          .append(price)
          .append("<br>");
      } else {
        break;
      }
    }
  });
}

getDrinks();

$(document).on("click", "#drinks", function() {
  $("#drinks").addClass("active disabled");
  $("#foods").removeClass("active disabled");
  $("#products").removeClass("active disabled");
  $("#items-list-name-1-data").empty();
  $("#items-list-price-1-data").empty();
  $("#items-list-name-2-data").empty();
  $("#items-list-price-2-data").empty();
  getDrinks();
});

$(document).on("click", "#foods", function() {
  $("#foods").addClass("active disabled");
  $("#drinks").removeClass("active disabled");
  $("#products").removeClass("active disabled");
  $("#items-list-name-1-data").empty();
  $("#items-list-price-1-data").empty();
  $("#items-list-name-2-data").empty();
  $("#items-list-price-2-data").empty();
  getFoods();
});

$(document).on("click", "#products", function() {
  $("#products").addClass("active disabled");
  $("#drinks").removeClass("active disabled");
  $("#foods").removeClass("active disabled");
  $("#items-list-name-1-data").empty();
  $("#items-list-price-1-data").empty();
  $("#items-list-name-2-data").empty();
  $("#items-list-price-2-data").empty();
  getProducts();
});

$(document).on("click", ".inventory-item", function() {
  console.log("HELLO WORLD!");
  var id = $(this).data("id");
  $.get("/api/inventory/" + id, function(data) {
    console.log(data);
    $("#inventory-id").text(data.name);
    $("#inventory-description").text(data.description);
    $("#modal-inventory").modal();
  });
});

$("#modal-inventory").on("hidden.bs.modal", function() {
  $("#inventory-id").empty();
  $("#inventory-description").empty();
  $("#modal-quantity").val("");
  $("#modal-size").prop("selectedIndex", 0);
});
