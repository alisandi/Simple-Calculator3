function getNumbers() {
    let num1 = parseFloat(document.getElementById("t1").value);
    let num2 = parseFloat(document.getElementById("t2").value);
    return { num1, num2 };
}

function add() {
    let { num1, num2 } = getNumbers();
    document.getElementById("t3").value = num1 + num2;
}

function subtract() {
    let { num1, num2 } = getNumbers();
    document.getElementById("t3").value = num1 - num2;
}

function multiply() {
    let { num1, num2 } = getNumbers();
    document.getElementById("t3").value = num1 * num2;
}

function divide() {
    let { num1, num2 } = getNumbers();
    let resultElement = document.getElementById("t3");

    if (num2 === 0) {
        resultElement.value = "Error: Cannot divide by zero";
    } else {
        resultElement.value = num1 / num2;
    }
}
