var amount = 0 ;
var years = 0;
var intrestRate = 0;
var monthlyInstallment = 0;
var totalIntrest = 0;
var totalPaid = 0;

$("#calculateButton").on("click", function(){
  amount= $("#amountTxt").val();
  amount = parseFloat(amount);
  years =  $("#tenursTxt").val();
  years = parseInt(years);
  intrestRate = $("#rate").val();
  intrestRate = parseInt(intrestRate);
  intrestRate = intrestRate/1.82;
  totalIntrest = years * intrestRate;
  totalIntrest = amount *  (totalIntrest / 100);
  monthlyInstallment = ( amount + totalIntrest )/ ( years * 12 );

  monthlyInstallment = Math.floor(monthlyInstallment);
  document.getElementById("installment").innerHTML = ": " + " " + monthlyInstallment;

  document.getElementById("intrest").innerHTML = ": " + totalIntrest.toFixed(0);
  document.getElementById("paid").innerHTML = ": " + (totalIntrest + amount).toFixed(0);
});
