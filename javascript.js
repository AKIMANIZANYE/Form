$(document).ready(function() {
  $("#hide").click(function() {
    $("#submit").hide(1000);
  });

  $(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["name", "secondName", "yourId", "email"];

      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });

      $("#story").show();

      event.preventDefault();
    });
  });
});
function check() {
  var qOne = document.test.one.value;
  var qTwo = document.test.two.value;
  var qThree = document.test.three.value;
  var qFour = document.test.four.value;
  var qFive = document.test.five.value;
  var qSix = document.test.six.value;
  var qSeven = document.test.seven.value;
  var qEight = document.test.eight.value;
  var qNine = document.test.nine.value;
  var qTen = document.test.ten.value;
  var qEleven = document.test.eleven.value;
  var qTwelve = document.test.twelve.value;
  var qThirteen = document.test.thirteen.value;
  var qFourteen = document.test.fourteen.value;
  var count = 0;

  if (one == "1") {
    count += 1;
  }

  if (qTwo == "2") {
    count += 1;
  }
  if (qThree == "3") {
    count += 1;
  }
  if (qFour == "4") {
    count += 1;
  }
  if (qFive == "5") {
    count += 1;
  }
  if (qSix == "6") {
    count += 1;
  }
  if (qSeven == "7") {
    count += 1;
  }

  if (qEight == "8") {
    count += 1;
  }
  if (qNine == "9") {
    count += 1;
  }
  if (qTen == "10") {
    count += 1;
  }
  if (qEleven == "select") {
    count += 1;
  }
  if (qTwelve == "select") {
    count += 1;
  }

  if (qThirteen == "select") {
    count += 1;
  }
  if (qFourteen == "select") {
    count += 1;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("number_count").innerHTML =
    "Your Score is " + count + "14.";

  $("#button").hide();
  $("#test").hide();
  $("#number_count").show();
  event.preventDefault();
}
