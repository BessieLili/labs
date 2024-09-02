// Інтерфейс, що описує поведінку тварини
interface Animal {
  name: string;          // Ім'я тварини
  age: number;           // Вік тварини
  move(): void;          // Метод для пересування

  
  canFly?: boolean;      
  
  canSwim?: boolean;     
}


class Bird implements Animal {
  name: string;
  age: number;
  canFly: boolean; // Цей атрибут специфічний для птахів

  constructor(name: string, age: number, canFly: boolean = true) {
      this.name = name;
      this.age = age;
      this.canFly = canFly;
  }

  move(): void {
      if (this.canFly) {
          console.log(`${this.name} летить високо в небі.`);
      } else {
          console.log(`${this.name} не може літати, він йде.`);
      }
  }
}


class Cat implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  move(): void {
      console.log(`${this.name} йде тихо.`);
  }
}


class Fish implements Animal {
  name: string;
  age: number;
  canSwim: boolean; // Цей атрибут специфічний для риб

  constructor(name: string, age: number, canSwim: boolean = true) {
      this.name = name;
      this.age = age;
      this.canSwim = canSwim;
  }

  move(): void {
      if (this.canSwim) {
          console.log(`${this.name} плаває у воді.`);
      } else {
          console.log(`${this.name} не може плавати.`);
      }
  }
}


const cat = new Cat("Кіт", 2);
cat.move();  

const bird = new Bird("Ворона", 3);
bird.move();  

const fish = new Fish("Золота рибка", 1);
fish.move();