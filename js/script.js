//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый
//инпут выводит свое value в абзац с id="test"

let inputs = document.querySelectorAll(".work-1");
let paragraph = document.querySelector("#test");
inputs.forEach((input) => {
  input.addEventListener("blur", function (e) {
    paragraph.textContent += e.target.getAttribute("value");
  });
});

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом
//при нажатии на любой из них, но только по первому нажатию. Повторное
//нажатие на инпут не должно вызывать реакции.

let inputs2 = document.querySelectorAll(".work-2");
for (let i = 0; i < inputs2.length; i++) {
  inputs2[i].addEventListener("click", addValue);
}
function addValue() {
  alert(this.getAttribute("value"));
  this.removeEventListener("click", addValue);
}

// Даны абзацы с числами. По нажатию на абзац в нем должен появится
//квадрат числа, которое он содержит.

let numbers = document.querySelectorAll(".work-3");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.target.textContent += ` Квадрат числа = ${e.target.textContent ** 2}`;
  });
});

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли
//свое содержимое на правильное количество символов. Сколько символов
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито
//правильное количество, то граница инпута становится зеленой, если
//неправильное - красной.

let inputs3 = document.querySelectorAll(".work-4");
inputs3.forEach((input) => {
  input.addEventListener("blur", (e) => {
    if (e.target.getAttribute("data-length") == e.target.value) {
      e.target.style.borderColor = "#008000";
    } else {
      e.target.style.borderColor = "#ff0000";
    }
  });
});
