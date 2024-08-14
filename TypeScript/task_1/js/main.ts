export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  export interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  const teacher3: Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
  };
  
  console.log(director1);
  console.log(teacher3);
  
  export function printTeacher(firstName: string, lastName: string): string {
    return firstName.charAt(0) + ". " + lastName;
  }
  
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  export interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
  }
  
  export class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    displayName(): string {
      return this.firstName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  }
