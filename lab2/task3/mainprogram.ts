abstract class Car {
  protected make: string;
  protected model: string;
  protected year: number;
  private mileage: number;
  
  constructor(make: string, model: string, year: number, mileage: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
  }

  // Загальний метод для всіх автомобілів
  public displayInfo(): void {
      console.log(`Виготовлення: ${this.make}, Модель: ${this.model}, Рік: ${this.year}, Пробіг: ${this.mileage}`);
  }

  // Захищений метод, який може бути використаний похідними класами
  protected startEngine(): void {
      console.log("Двигун працюючий.");
  }
}



class BMW extends Car {
  constructor(model: string, year: number, mileage: number) {
      super("BMW", model, year, mileage);
  }

  // Специфічний метод для BMW
  public displayInfo(): void {
      super.displayInfo();
      console.log("Це розкішний автомобіль від BMW.");
  }

  public start(): void {
      this.startEngine(); // Виклик захищеного методу з базового класу
  }
}


class Toyota extends Car {
  constructor(model: string, year: number, mileage: number) {
      super("Toyota", model, year, mileage);
  }

  // Специфічний метод для Toyota
  public displayInfo(): void {
      super.displayInfo();
      console.log("Toyota відомий своєю надійністю.");
  }

  public start(): void {
      this.startEngine();
  }
}


class Ford extends Car {
  constructor(model: string, year: number, mileage: number) {
      super("Ford", model, year, mileage);
  }

  // Специфічний метод для Ford
  public displayInfo(): void {
      super.displayInfo();
      console.log("Ford це американська класика.");
  }

  public start(): void {
      this.startEngine();
  }
}



const bmw1 = new BMW("X5", 2021, 10000);
const bmw2 = new BMW("i8", 2020, 5000);

const toyota1 = new Toyota("Camry", 2019, 30000);
const toyota2 = new Toyota("Corolla", 2018, 45000);

const ford1 = new Ford("Mustang", 2017, 20000);
const ford2 = new Ford("F-150", 2022, 15000);

// Виклик методів для кожного автомобіля
bmw1.displayInfo();
bmw1.start();
bmw2.displayInfo();
bmw2.start();

toyota1.displayInfo();
toyota1.start();
toyota2.displayInfo();
toyota2.start();

ford1.displayInfo();
ford1.start();
ford2.displayInfo();
ford2.start();

