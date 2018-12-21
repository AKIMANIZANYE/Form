


var count = 0;
// var questionOne = document.getElementById("quest1").value;
function check(a, b, c, d, e, f, g, h, j, k, l, m, n, o) {

  if (a == "1") {
    count += 1;
  }
  if (b == "1") {
    count += 1;
  }
  if (b == "1") {
    count += 1;
  }
  if (c == "1") {
    count += 1;
  }
  if (d == "1") {
    count += 1;
  }
  if (e == "2") {
    count += 1;
  }
  if (f == "1") {
    count += 1;
  }
  if (g == "1") {
    count += 1;
  } if (h == "1") {
    count += 1;
  }
  if (j == "1") {
    count += 1;
  }
  if (k == "2") {
    count += 1;
  }
  if (l == "1") {
    count += 1;
  }
  if (m == "1") {
    count += 1;
  }


  if (n == "1") {
    count += 1;
  }
  if (o == "1") {
    count += 1;
  }

  return count
  // document.getElementById("after_submit").style.visibility ="visible";

  // document.getElementById("number_count").innerHTML = "You got " +count + "%.";

};
$(document).ready(function () {

  $('#myform form').submit(function () {
    event.preventDefault();
    var Question1 = $("input[type='radio'][name='a']:checked").val()
    var Question2 = $("input[type='radio'][name='b']:checked").val()
    var Question3 = $("input[type='radio'][name='c]:checked").val()
    var Question4 = $("input[type='radio'][name='d']:checked").val()
    var Question5 = $("input[type='radio'][name='e']:checked").val()
    var Question6 = $("input[type='radio'][name='f']:checked").val()
    var Question7 = $("input[type='radio'][name='g']:checked").val()
    var Question8 = $("input[type='radio'][name='h']:checked").val()
    var Question9 = $("input[type='radio'][name='j']:checked").val()
    var Question10 = $("input[type='radio'][name='k']:checked").val()
    var Question11 = $("input[type='radio'][name='l']:checked").val()
    var Question12 = $("input[type='radio'][name='m']:checked").val()
    var Question13 = $("input[type='radio'][name='n']:checked").val()
    var Question14 = $("input[type='radio'][name='o']:checked").val()

    // console.log(Question1)
    check(Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14)
    $("#quiz").hide();
    $('#number_count').text("You got " + count + "/14.")
    $("#number_count").show();
  })

})