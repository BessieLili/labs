export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  position: string;
  hobbies: string[];
  photo: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    position: string,
    hobbies: string[],
    photo: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.position = position;
    this.hobbies = hobbies;
    this.photo = photo;
  }

  
}
