// Функція для розрахунку вартості морозива
function calculateIceCreamCost(): number {
  // Вибір розміру стаканчика
  const size = prompt("Оберіть розмір стаканчика (маленький або великий):")?.toLowerCase();
  let cost = 0;

  // Встановлення базової ціни за розмір стаканчика
  if (size === "маленький") {
      cost += 10;
  } else if (size === "великий") {
      cost += 25;
  } else {
      alert("Невірний розмір стаканчика. Будь ласка, оберіть 'маленький' або 'великий'.");
      return 0;
  }

  // Вибір начинок
  const toppings = prompt("Оберіть начинку (шоколад, карамель, ягоди). Ви можете обрати кілька, розділяючи їх комою:")?.toLowerCase().split(",").map(topping => topping.trim());

  if (!toppings || toppings.length === 0 || toppings[0] === "") {
      alert("Ви повинні обрати хоча б одну начинку.");
      return 0;
  }

  // Додавання вартості начинок
  toppings.forEach(topping => {
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
              alert(`Начинка "${topping}" не доступна.`);
      }
  });

  // Вибір додаткової опції маршмелоу
  const marshmallow = prompt("Бажаєте додати маршмелоу? (так або ні):")?.toLowerCase();
  
  if (marshmallow === "так") {
      cost += 5;
  }

  return cost;
}

// Виклик функції та виведення результату
const totalCost = calculateIceCreamCost();
if (totalCost > 0) {
  console.log(`Загальна вартість морозива: ${totalCost} грн`);
}
