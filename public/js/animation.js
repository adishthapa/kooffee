$("#drinks").on("click", function() {
  $("#drinks").addClass("active");
  $("#foods").removeClass("active");
  $("#products").removeClass("active");
});

$("#foods").on("click", function() {
  $("#foods").addClass("active");
  $("#drinks").removeClass("active");
  $("#products").removeClass("active");
});

$("#products").on("click", function() {
  $("#products").addClass("active");
  $("#drinks").removeClass("active");
  $("#foods").removeClass("active");
});
