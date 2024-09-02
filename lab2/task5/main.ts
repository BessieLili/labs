interface Course {
  name: string;
  duration: number; // тривалість у годинах
  students: string[]; // масив імен студентів
}


class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    // Реєстрація студента на курс
    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`Студент ${student} був зареєстрований на курс ${this.name}.`);
        } else {
            console.log(`Студент ${student} вже зареєстровано на курсі ${this.name}.`);
        }
    }

    // Перевірка, чи студент вже зареєстрований на курсі
    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}


class CourseManager {
    private courses: Course[];

    constructor() {
        this.courses = [];
    }

    // Додавання курсу
    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс ${course.name} було додано.`);
    }

    // Видалення курсу за назвою
    removeCourse(courseName: string): void {
        const index = this.courses.findIndex(course => course.name === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Курс ${courseName} Було видалено.`);
        } else {
            console.log(`Курс ${courseName} Не знайдено.`);
        }
    }

    // Пошук курсу за назвою
    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }

    // Виведення інформації про всі курси та їх студентів
    listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Курс: ${course.name}, Тривалість: ${course.duration} годин, Студентів: ${course.students.join(', ')}`);
        });
    }
}



// Створення екземплярів курсів
const course1 = new OnlineCourse("TypeScript Basics", 10);
const course2 = new OnlineCourse("Advanced JavaScript", 15);
const course3 = new OnlineCourse("Web Development with React", 20);

// Створення менеджера курсів
const courseManager = new CourseManager();

// Додавання курсів до менеджера
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);

// Реєстрація студентів на курси
course1.registerStudent("Аліса");
course1.registerStudent("Боб");
course2.registerStudent("Чарлі");
course3.registerStudent("Діана");
course3.registerStudent("Джон");

// Спроба зареєструвати студента ще раз
course1.registerStudent("Аліса");


courseManager.listCourses();


courseManager.removeCourse("Advanced JavaScript");

// Виведення списку курсів після видалення
courseManager.listCourses();



