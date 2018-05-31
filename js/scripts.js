$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var enter = $("input#enter-Name").val();
    var food = $("select#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $(".enter-Name").text(enter);
    $(".food").text(food);
    $(".music").text(music);
    $(".dob").text(dob);
    $(".favoriteColor").text(favoriteColor);

      $("body").css("background-color", favoriteColor);


    $("#story").show();




    event.preventDefault();
  });
});
