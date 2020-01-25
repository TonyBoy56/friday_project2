$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var result1 = $("input[name=question1]").val();

    var result2 = $("input[name=question2").val();

    var result3 = $("input[name=question3]").val();

    var result4 = $("input[name=question4]").val();

    var result5 = $("input[name=question5]").val();
  
    if (result1 === result2) {
      $("#output").text("Nice choice!Try some HTML/CSS!");
    } else if (result2 === result3) {
      $("#output").text("Hmmm... It seems back-end programming may be suitable for you."); 
    } else if (result3 === result4) {
      ("#output").text("Nice! plenty of caffiene is a great choice for some front-end focused development!" );
    } else if (result4 === result5) {
      ("#output").text("You know, maybe it's worth considering taking up something else.");
    }
  });
});