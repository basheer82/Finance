var content;
var interval = null;
var count = 0;
var speed = 6;
function run() {
    count += speed;
    if (count >= 375) {
        window.clearInterval(interval);
        interval = null
    }
    var bigImage = document.getElementById("imgCover");
    bigImage.setAttribute("style", "width: " + (0.7656 * count + "px;") +
        "height: " + (count + "px;"));
}
function display(imgfile) {
    if (interval)
        return;
    var bigImage = document.getElementById("imgCover");
    bigImage.setAttribute("style", "width: 0px; height: 0px;");
    bigImage.setAttribute("src",  imgfile);
    count = 0;
    interval = window.setInterval("run()", 10);
}
function displayText(txt)
{
  switch(txt)
  {
    case "deposit-big":
     document.getElementById("contentText").innerHTML = "Fixed Time Deposits, Fixed reates on money ";
     break;

    case "loan-big":
      document.getElementById("contentText").innerHTML = "When you get a loan, you typically recives your money in a lump sum, "
                                                          + "and repay with fixed monthly payments over time, calculate how much you'll pay";
       break;

    case "credit-big":
       document.getElementById("contentText").innerHTML = "More businesses than ever now accept credit cards for payment, "
                                                          + "calculate how much intrest you pay when you payoff your credit";
        break;
  }
}

function start() {
    document.getElementById("deposit-big").addEventListener("click", function() {
        display("deposit-big.png");
         displayText("deposit-big");
    }, false);
    document.getElementById("loan-big").addEventListener("click", function() {
        display("loan-big.png");
        displayText("loan-big");
    }, false);
    document.getElementById("credit-big").addEventListener("click", function() {
        display("credit-big.png");
        displayText("credit-big");
    }, false);
}
window.addEventListener("load", start, false);
