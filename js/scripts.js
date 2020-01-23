$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var result1 = $("input[name=question1]").val();

    var result2 = $("input[name=question2").val();

    var result3 = $("input[name=question3]").val();

    var result4 = $("input[name=question4]").val();

    var result5 = $("input[name=question5]").val();
  
    if (result1 === result2); {
      $("#output").text("")
    }
  });
});

// if (result1 === result2); {
//   $("output").text("Congrats! You are front-end specialized programmer! Stick with html and css.")
//   else if (result1 != result2) {
//     $("output").text("Maybe you should reconsider your field of choice...");
//   });