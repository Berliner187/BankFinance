let slider = document.getElementById("sliderSum");
let output = document.getElementById("valueSumD");
output.innerHTML = slider.value.split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");

slider.oninput = function() {
  output.innerHTML = this.value.split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
}


let slider_Percent = document.getElementById("userPercentD");
let output_Percent = document.getElementById("valuePercent");
output_Percent.innerHTML = slider_Percent.value;

slider_Percent.oninput = function() {
  output_Percent.innerHTML = this.value;
}


let slider_Term = document.getElementById("userTerm_changeD");
let output_Term = document.getElementById("userTerm_outputD");
output_Term.innerHTML = slider_Term.value;
;

slider_Term.oninput = function() {
  output_Term.innerHTML = this.value;
;
}


setInterval(() => {

let userSum = document.getElementById("valueSumD").innerHTML.replace(/\s/g, '');
let userPercent = document.getElementById("valuePercent").innerHTML.replace(/\s/g, '');
let percent = userPercent / 12 / 100;
let mounthTerm = document.getElementById("userTerm_outputD").innerHTML.replace(/\s/g, '');
let term = mounthTerm * 30;



let Interest_income = userSum * userPercent * term / 365 / 100;
document.getElementById("total_percent_payD").innerHTML = Interest_income.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");


let InterestTotal = Interest_income + Number(userSum);
document.getElementById("total_percentD").innerHTML = InterestTotal.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");

});


// .value.split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
