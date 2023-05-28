function subtract() {
    const fst = Number(document.getElementById("firstNumber").value)
    const sec = Number(document.getElementById("secondNumber").value)

    const result = fst - sec
    const rslt = document.getElementById("result")
    rslt.textContent = result.toFixed(2)
}