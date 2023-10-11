var randomNum1 = Math.floor(Math.random() * 6 ) + 1;

var randomImageResource1 = "./images/dice" + randomNum1 + ".png";

 $(".img1").attr("src", randomImageResource1);


 var randomNum2 = Math.floor(Math.random() * 6 ) + 1;

 var randomImageResource2 = "./images/dice" + randomNum2 + ".png";

 $(".img2").attr("src", randomImageResource2);


 if (randomImageResource1 > randomImageResource2) {

    $("h1").text("🚩 Play 1 Wins!");

 } else if (randomImageResource1 < randomImageResource2) {

    $("h1").text("🚩 Play 2 Wins!");

 } else {

  $("h1").text("Draw!");
 }