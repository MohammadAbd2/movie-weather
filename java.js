$(document).ready(function() {
    $.ajax({
  url: 'movie_20.json',
  method: 'GET'
}).then(function(json) {
  console.log(json);
json.forEach(function(film){
  $("#container").html($("#container").html() + "<div class='movies'>" + "<div class='title'>" + film.title  + "<img src='" + film.posterurl + "'>" + "</div>" + "</div>");
$("#botton").on("click", function(){
  
});
});
});

        });
