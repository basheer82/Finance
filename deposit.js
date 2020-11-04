var year;
var content = "";
var rowsClasses = [" ","table-info","table-primary", "table-light", "table-success", "table-danger", "table-warning", "table-info", "table-primary", "table-success", "table-info" ];

$("#calculateButton").on("click", function(){
var amount =  $("#dpstAmount").val();
var principal =  $("#dpstAmount").val();
var rate =  $("#intrstRate").val();
rate = rate / 100;

for ( var counter = 1; counter <= 5; counter++)
{
  content +=  "<div class = 'container-fluid col-9'> ";
  content +="<table class = 'table-active table-xsm table-hover'>";
  content += "<caption>Compound Interest Rate, Rate: " + (rate* 100).toFixed(0) + "% </caption>";
  content += "<thead><tr><th>Year</th><th>Amount</th></tr></thead><tbody>";
    for ( year = 1; year <= 10; year++)
    {
     amount = principal * Math.pow( 1.0 + rate, year);
     content += "<tr class = " + rowsClasses[year] + "><td>" + year + "</td><td>" + amount.toFixed(0) + "</td></tr>";
    }
  content += "</tbody></table>";
  content += "</div>";
  rate = rate + 0.01;
}
document.getElementById("ratesTables").innerHTML =  content;
});
