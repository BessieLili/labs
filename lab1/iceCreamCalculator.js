// Функція для розрахунку вартості морозива
function calculateIceCreamCost() {
    var _a, _b, _c;
    // Вибір розміру стаканчика
    var size = (_a = prompt("Оберіть розмір стаканчика (маленький або великий):")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var cost = 0;
    // Встановлення базової ціни за розмір стаканчика
    if (size === "маленький") {
        cost += 10;
    }
    else if (size === "великий") {
        cost += 25;
    }
    else {
        alert("Невірний розмір стаканчика. Будь ласка, оберіть 'маленький' або 'великий'.");
        return 0;
    }
    // Вибір начинок
    var toppings = (_b = prompt("Оберіть начинку (шоколад, карамель, ягоди). Ви можете обрати кілька, розділяючи їх комою:")) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(",").map(function (topping) { return topping.trim(); });
    if (!toppings || toppings.length === 0 || toppings[0] === "") {
        alert("Ви повинні обрати хоча б одну начинку.");
        return 0;
    }
    // Додавання вартості начинок
    toppings.forEach(function (topping) {
        switch (topping) {
            case "шоколад":
                cost += 5;
                break;
            case "карамель":
                cost += 6;
                break;
            case "ягоди":
                cost += 10;
                break;
            default:
                alert("\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \"".concat(topping, "\" \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430."));
        }
    });
    // Вибір додаткової опції маршмелоу
    var marshmallow = (_c = prompt("Бажаєте додати маршмелоу? (так або ні):")) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    if (marshmallow === "так") {
        cost += 5;
    }
    return cost;
}
// Виклик функції та виведення результату
var totalCost = calculateIceCreamCost();
if (totalCost > 0) {
    console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalCost, " \u0433\u0440\u043D"));
}
