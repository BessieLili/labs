interface LibraryItem {
  title: string;
  author: string;
  isBorrowed: boolean;

  borrow(): void;
}


class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.pages = pages;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`Книгу "${this.title}" було запозичено.`);
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`Журнал "${this.title}" (Випуск ${this.issueNumber}) було запозичено.`);
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    duration: number; // тривалість у хвилинах

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
        this.duration = duration;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`DVD "${this.title}" було запозичено.`);
    }
}


class Library {
    private items: LibraryItem[];

    constructor() {
        this.items = [];
    }

    // Додавання елемента до бібліотеки
    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Позицію "${item.title}"додано до бібліотеки.`);
    }

    // Пошук елемента за назвою
    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    // Виведення списку доступних елементів
    listAvailableItems(): void {
        console.log('Доступні елементи в бібліотеці:');
        this.items.forEach(item => {
            if (!item.isBorrowed) {
                console.log(`- ${item.title} від ${item.author}`);
            }
        });
    }
}


// Створення екземплярів елементів бібліотеки
const book1 = new Book("Вбити пересмішника", "Гарпер Лі", 281);
const book2 = new Book("1984", "Джордж Оруелл", 328);
const magazine1 = new Magazine("National Geographic", "Різне", 202);
const dvd1 = new DVD("Зародження", "Крістофер Нолан", 148);

// Створення бібліотеки
const library = new Library();

// Додавання елементів до бібліотеки
library.addItem(book1);
library.addItem(book2);
library.addItem(magazine1);
library.addItem(dvd1);

// Позичення деяких елементів
book1.borrow();
dvd1.borrow();

// Виведення списку доступних елементів
library.listAvailableItems();

// Пошук елемента за назвою
const foundItem = library.findItemByName("1984");
if (foundItem) {
    console.log(`Знайдено позицію: ${foundItem.title} від ${foundItem.author}`);
} else {
    console.log("Позицію не знайдено.");
}



