$(document).ready(function() {
  $("#mydata").on("click",function(){
    $.ajax({
  url: 'movie_20.json',
  method: 'GET'
}).then(function(json) {
  console.log(json);
       $("#maintext").html("<div id='maintext'>"+ "<h2>" + json[0].title + "</h2>" + "<div>");
  });
});
 });
