let formula = "";
const formulaDisplay = document.getElementById("formula-display");
const resultDisplay = document.getElementById("result-display");

document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (value === "C") {
            formula = "";
            resultDisplay.innerText = "0";
            formulaDisplay.innerText = "0";
        } else if (value === "=") {
            try {
                const result = eval(formula);
                resultDisplay.innerText = result;
            } catch (error) {
                resultDisplay.innerText = "Error";
            }
        } else {
            formula += value;
            formulaDisplay.innerText = formula || "0";
        }
    })
})