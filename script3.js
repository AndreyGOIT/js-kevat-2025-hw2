let formula = ""; // Tallentaa nykyisen kaavan

const display = document.getElementById("display");
display.innerText = "0"; // Alkuperäinen näyttöarvo

// Napsauta painikkeiden käsittelijää
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      // kaavan arvo nollataan
      formula = "";
      display.innerText = "0"; 
    } else if (value === "BS") {
      // Poista viimeinen merkki
      formula = formula.slice(0, -1);
      display.innerText = formula; // Kaavan päivitys
    } else if (value === "=") {
      try {
        poistaViimeinenOper();

        // Tarkista tyhjä kaava
        if (formula.trim() === "") {
          display.innerText = "0";
          return;
        }

        // Tuloksen laskeminen
        const result = eval(formula);
        display.innerText = result; // Näytä tulos
        formula = ""; // Selkeä kaava uudelle syötteelle
      } catch (error) {
        display.innerText = "Error"; // Virheen käsittely
        formula = "";
      }
    } else {
      // Symbolin lisääminen kaavaan
      formula += value;
      display.innerText = formula; // Kaavan päivitys
    }
  });
});

function poistaViimeinenOper() {
  let operaattorit = "+-*/";
  let viimeinenMrk = formula.slice(-1); // muutettiin substr-menetelmän slice-menetelmäksi 
  if (operaattorit.indexOf(viimeinenMrk) >= 0) {
    formula = formula.slice(0, -1); // käytetään slice metodia
    display.innerText = formula || "0";
  }
}
