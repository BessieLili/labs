abstract class Employee {
  protected name: string;
  protected age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
      this.name = name;
      this.age = age;
      this.salary = salary;
  }

  abstract getAnnualBonus(): number;
}



interface Payable {
  pay(): void;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
      super(name, age, salary);
  }

  getAnnualBonus(): number {
      return this.salary * 0.10; // 10% бонус
  }

  pay(): void {
      console.log(`Оплата ${this.salary} Розробнику ${this.name}`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
      super(name, age, salary);
  }

  getAnnualBonus(): number {
      return this.salary * 0.20; // 20% бонус
  }

  pay(): void {
      console.log(`Оплата ${this.salary} Менеджеру ${this.name}`);
  }
}



const employees: Employee[] = [
    new Developer("Аліса", 30, 100000),
    new Developer("Джон", 25, 90000),
    new Manager("Чарлі", 40, 150000),
    new Manager("Діана", 35, 120000)
];

let totalAnnualBonus = 0;

employees.forEach(employee => {
    totalAnnualBonus += employee.getAnnualBonus();
    (employee as any).pay(); // Виклик методу pay для всіх об'єктів, що імплементують Payable
});

console.log(`Загальна річна премія для всіх співробітників: ${totalAnnualBonus}`);

