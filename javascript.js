$(document).ready(function() {
  $("#hide").click(function() {
    $("#submit").hide(1000);
  });

  var beverage = $("#beverage").val();
  var flavor = $("input:radio[name=one]:checked").val();
});
