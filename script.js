let money = +prompt("Ваш бюджет на місяць ?");
let time = prompt("Введіть дату в форматі YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    optionalExpenses: {},
    savings: false
};




for (let i = 0; i < 2; i++) {
    let a = prompt("Ввеідть обов'язкову статтю витрат в цьому місяці");
    let b = prompt("Сума?");

    if ((typeof (a)) === 'string' && (typeof (a)) !== null && (typeof (b)) !== b &&
        a !== '' && b !== '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad");
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let a = prompt("Ввеідть обов'язкову статтю витрат в цьому місяці");
//     let b = prompt("Сума?");

//     if ((typeof (a)) === "string" && !a && !b && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     }
//     i++;
// }

// do {
//     let a = prompt("Ввеідть обов'язкову статтю витрат в цьому місяці");
//     let b = prompt("Сума?");

//     if ((typeof (a)) === 'string' && (typeof (a)) !== null && (typeof (b)) !== b &&
//         a !== '' && b !== '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     }
//     i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Щоденний бюджет " + appData.moneyPerDay);


if (appData.moneyPerDay < 1000) {
    console.log("Мінінмальний рівень достатку");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log("Середній рівень достатку");
} else if (appData.moneyPerDay > 2000) {
    console.log("Високий рівень достатку");
} else {
    console.log("Помилка");
}