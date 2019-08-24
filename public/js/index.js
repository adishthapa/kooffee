function getDrinks() {
  $.get("/api/inventory/drinks", function(data) {
    for (var i = 0; i < 5; i++) {
      var name = $("<h5>").text(data[i].name);
      $("#items-list-name-1-data")
        .append(name)
        .append("<br>");
      var price = $("<h5>").text(
        "S: $" +
          data[i].smallPrice +
          " |" +
          " M: $" +
          data[i].smallPrice +
          " |" +
          " L: $" +
          data[i].smallPrice
      );
      $("#items-list-price-1-data")
        .append(price)
        .append("<br>");
      console.log(data);
    }
    for (var i = 5; i < 10; i++) {
      var name = $("<h5>").text(data[i].name);
      $("#items-list-name-2-data")
        .append(name)
        .append("<br>");
      var price = $("<h5>").text("$" + data[i].price);
      $("#items-list-price-2-data")
        .append(price)
        .append("<br>");
      console.log(data);
    }
  });
}

getDrinks();

$("#drinks").on("click", function() {
  $("#drinks").addClass("active disabled");
  $("#foods").removeClass("active disabled");
  $("#products").removeClass("active disabled");
  $("#items-list-name-1-data").empty();
  $("#items-list-price-1-data").empty();
  getDrinks();
});

$("#foods").on("click", function() {
  $("#foods").addClass("active disabled");
  $("#drinks").removeClass("active disabled");
  $("#products").removeClass("active disabled");
  $("#items-list-name-1-data").empty();
  $("#items-list-price-1-data").empty();
});

$("#products").on("click", function() {
  $("#products").addClass("active disabled");
  $("#drinks").removeClass("active disabled");
  $("#foods").removeClass("active disabled");
  $("#items-list-name-1-data").empty();
  $("#items-list-price-1-data").empty();
});
