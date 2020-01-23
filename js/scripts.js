$(document).ready(function() {
  $("form#food").submit(function (event) {
    event.preventDefault();
    var result1 = $("food#question1").val();

    var result2 = $("activity#question2").val();

    var result3 = $("language#question3").val();

    var result4 = $("coffee#question4").val();

    var result5 = $("color#question5").val();

    if (result1 === result2); {
      $("#output").text("Congrats! You are a front-end programmer! Stick with html and css.");
    {

  } else if (result1 != result2) {
      $("#output").text("Maybe you should reconsider your field of choice...");
        }
      }
    }
  });
});

// if (result1 === result2); {
//   $("output").text("Congrats! You are front-end specialized programmer! Stick with html and css.")
//   else if (result1 != result2) {
//     $("output").text("Maybe you should reconsider your field of choice...");
//   });