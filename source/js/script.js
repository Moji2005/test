const weight = document.getElementById("weight");
const height = document.getElementById("height");
const resultShow = document.getElementById("result")
const category = document.getElementById("category")
const weightVal = document.getElementById("weight-val")
const heightVal = document.getElementById("height-val")

let result;

function bmi() {
    result = weight.value / ((height.value / 100) * (height.value / 100));
    weightVal.innerHTML = weight.value + " kg";
    heightVal.innerHTML = height.value + " Cm";
    resultShow.innerHTML = result.toFixed(1);
    if (result < 18.5) {
        resultShow.style.color = "yellow";
        category.innerHTML = "Under Weight";
    } else if (result < 24.9) {
        resultShow.style.color = "green";
        category.innerHTML = "Normal Weight";
    } else if (result < 29.9) {
        resultShow.style.color = "orange";
        category.innerHTML = "Over Weight";
    }  else if (result < 34.9) {
        resultShow.style.color = "red";
        category.innerHTML = "Obese 1";
    } else if (result < 39.9) {
        resultShow.style.color = "red";
        category.innerHTML = "Obese 2";
    }else {
        resultShow.style.color = "red";
        category.innerHTML = "Obese 3";
    }
}
weight.addEventListener("input" , bmi)

height.addEventListener("input" , bmi)


