let slider = document.getElementById("userRange");
let output = document.getElementById("valueSum");
output.innerHTML = slider.value.split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");

slider.oninput = function() {
  output.innerHTML = this.value.split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
}


let slider_Percent = document.getElementById("userRange_Percent");
let output_Percent = document.getElementById("valueSum_Percent");
output_Percent.innerHTML = slider_Percent.value;

slider_Percent.oninput = function() {
  output_Percent.innerHTML = this.value;
}


let slider_Term = document.getElementById("userTerm_change");
let output_Term = document.getElementById("userTerm_output");
output_Term.innerHTML = slider_Term.value;
;

slider_Term.oninput = function() {
  output_Term.innerHTML = this.value;
;
}