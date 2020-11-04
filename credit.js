$("#calculateButton").on("click", function(){
  var debit = 0;
  var intrest = 0;
  var monthlyPayment = 0;
  var desiredMonths = 0;
  var tenures = -1;
  var remainingDebit = 0;
  var monthIntrest = 0;
  var totalIntrest = 0;
  var totalPayoff = 0;
  var debitBalance = 0;
  var payment;
  debit = $("#creditDebit").val();
  intrest = $("#intrestRate").val();
  monthlyPayment = $("#mPayment").val();
  desiredMonths = $("#desiredPayMonths").val();
  remainingDebit = $("#creditDebit").val();
    if(remainingDebit !== ""){
      {while(remainingDebit > 0)
      {
        remainingDebit = remainingDebit * (1 + (intrest/100));
        remainingDebit -= monthlyPayment;
        tenures++;
        console.log(tenures);
        console.log(remainingDebit);
        console.log(monthlyPayment);
      }}
      totalPayoff = tenures * monthlyPayment;
      totalIntrest = totalPayoff - debit;
      document.getElementById("resultTotalPaidIntrest").innerHTML = totalIntrest;
      document.getElementById("resultTotalPaidAmount").innerHTML = totalPayoff;
      }
      else if ($("desiredPayMonths").val() !== "")
      {
        payment = debit / $("#desiredPayMonths").val();
        payment += debit * ($("#intrestRate").val()/100);
      }
});
