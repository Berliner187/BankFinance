setInterval(() => {

let userSum = document.getElementById("valueSum").innerHTML.replace(/\s/g, '');
let userPercent = document.getElementById("valueSum_Percent").innerHTML.replace(/\s/g, '');
let percent = userPercent / 12 / 100;
let userTerm = document.getElementById("userTerm_output").innerHTML.replace(/\s/g, '');
let term = userTerm * 30;



let quantityA = percent * (1 + percent) ** userTerm / ((1 + percent) ** userTerm - 1);


let monthly = quantityA * userSum;
document.getElementById("total_monthly").innerHTML = monthly.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");

let total_overpayment = monthly * userTerm - userSum;
document.getElementById("total_overpayment").innerHTML = total_overpayment.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");

let total = total_overpayment + Number(userSum);
document.getElementById("total_pay").innerHTML = total.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");

});


// .value.split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");