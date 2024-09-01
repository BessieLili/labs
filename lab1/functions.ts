// Функція з параметром за замовчуванням
function greet(name: string, age: number = 30): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Виклик функції без вказівки числа
console.log(greet("Alice"));

// Виклик функції з вказівкою числа
console.log(greet("Bob", 25));
