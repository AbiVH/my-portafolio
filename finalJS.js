function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var amount = parseInt(principal) + parseFloat(interest);
  var result = document.getElementById("result");
  var year = new Date().getFullYear() + parseFloat(years);

  if (principal <= 0) {
    alert("Please enter a positive number! Bitch");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "<br>If you depost $" +
      principal +
      ",<br>at an interest rate of " +
      rate +
      "%<br>You will receive an amount of $" +
      amount +
      ",<br>in the year " +
      year +
      "<br>";
  }
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
