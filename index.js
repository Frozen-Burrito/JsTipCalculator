const result = document.getElementById("tipResult");

function calculateTip() {

    let total = document.getElementById("bill").value;
    let people = document.getElementById("people").value;

    let tip = Math.round(((total * 0.1 / people) + Number.EPSILON) * 100 ) / 100;
    console.log(tip)

    result.innerHTML = `$ ${tip}`;
}