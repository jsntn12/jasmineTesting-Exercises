window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount:100000, years: 10, rate: 4.5};
  let amountForm = document.getElementById("loan-amount");
  let rateForm = document.getElementById("loan-rate");
  let yearsForm = document.getElementById("loan-years");
  amountForm.value = values.amount;
  rateForm.value = values.rate;
  yearsForm.value = values.years;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let numPayment = values.years * 12;
  let interestRate = (values.rate / 100) / 12;
  let result = (values.amount * interestRate) / (1- Math.pow((1 + interestRate), -numPayment));
  return result.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyDiv = document.getElementById("monthly-payment");
  monthlyDiv.innerText = `$${calculateMonthlyPayment(getCurrentUIValues())}`
}
