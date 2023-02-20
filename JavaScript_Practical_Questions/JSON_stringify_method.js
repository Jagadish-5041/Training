const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        point: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 90;
let isMarried = true
const student = {
    firstName:'FirstName',
    lastName:'LastName',
    age:55,
    isStudent:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
};
const JSON_String_1 = JSON.stringify(skills);
const JSON_String_2 = JSON.stringify(age);
const JSON_String_3 = JSON.stringify(isMarried);
const JSON_String_4 = JSON.stringify(student);
const JSON_String_5 =  JSON.stringify(student.firstName+" "+student.lastName+" "+student.skills);
const JSON_String_6 =  JSON.stringify(users);

console.log(JSON_String_1);
console.log(JSON_String_2);
console.log(JSON_String_3);
console.log(JSON_String_4);
console.log(JSON_String_5);
console.log(JSON_String_6);