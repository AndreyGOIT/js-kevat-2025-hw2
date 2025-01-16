let formula = ""; // Хранит текущую формулу

const display = document.getElementById("display");

// Обработчик кликов для кнопок
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      // Очистка формулы
      formula = "";
      display.innerText = "0"; // Сброс отображения
    } else if (value === "=") {
      try {
        // Вычисление результата
        const result = eval(formula);
        display.innerText = result; // Показать результат
        formula = ""; // Очистить формулу для нового ввода
      } catch (error) {
        display.innerText = "Error"; // Обработка ошибки
      }
    } else {
      // Добавление символа в формулу
      formula += value;
      display.innerText = formula; // Обновление формулы
    }
  });
});