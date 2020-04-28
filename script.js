let money = +prompt("Ваш бюджет на місяць ?");

let time = prompt("Введіть дату в форматі YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false
};

let costs = prompt("Ввеідть обов'язкову статтю витрат в цьому місяці");
let expens = prompt("Сума?");

appData.expenses.costs = expens;

alert(money / 30);