 $(document).ready(function() {
   $.getJSON("Movie_20.json", function(json) {
        var html = "";
        json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    $("#FirstID").push(key);
  });
  });
});
 });
