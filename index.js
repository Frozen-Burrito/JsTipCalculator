const result = document.getElementById("tipResult");

function calculateTip() {

    let total = document.getElementById("bill").value;
    let people = document.getElementById("people").value;

    let tip = total * 0.1 / people;
    console.log(tip)

    result.innerHTML = `$ ${tip}`;
}