// prototype on string to filter out banned words

String.prototype.filter = function (words) {
    return this.split(' ').filter(c => !words.includes(c)).join(' ');
}


console.log("Filtering banned words from a string");
console.log("Original string: This house is not nice! , Banned words: not, is");
console.log("Filtered string: " + "This house is not nice!".filter(['not', 'is']));

console.assert("This house is not nice!".filter(['not', 'is']) === "This house nice!", "Test failed");

Array.prototype.bubbleSort = function () {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                isSorted = false;
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
            }
        }
    }
    return this;
}


console.log("Bubble sort on an array");
console.log("Original array: [6,4,0, 3,-2,1]");
console.log("Sorted array: [" + [6, 4, 0, 3, -2, 1].bubbleSort() + "]");


console.assert([6, 4, 0, 3, -2, 1].bubbleSort().toString() === [-2, 0, 1, 3, 4, 6].toString(), "Test failed");


function Person(name) {
    this.name = name;
}

function Teacher(name) {
    Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

let teacher = new Teacher("Prof. John");
teacher.teach("Mathematics");


function person(name) {
    return {
        name: name
    }
}

let teacher2 = Object.create(person("Prof. Ahmed"));
teacher2.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

teacher2.teach("Physics");

let personProto = {
    greeting: function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    },
    salute: function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

let studentProto = Object.create(personProto);

studentProto.major = "Computer Science";
studentProto.greeting = function () {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

let professorProto = Object.create(personProto);
professorProto.department = "Computer Science";
professorProto.greeting = function () {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
}

let studentProtoObj = Object.create(studentProto);

studentProtoObj.name = "John";
studentProtoObj.age = 20;
studentProtoObj.greeting();
studentProtoObj.salute();

let professorProtoObj = Object.create(professorProto);

professorProtoObj.name = "Prof. John";
professorProtoObj.age = 40;
professorProtoObj.greeting();
professorProtoObj.salute();

// Function constructor approach
function Person2(name, age) {
    this.name = name;
    this.age = age;
}

Person2.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
}

Person2.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

function Student(name, age, major) {
    Person2.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person2.prototype);
Student.prototype.greeting = function () {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

function Professor(name, age, department) {
    Person2.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person2.prototype);
Professor.prototype.greeting = function () {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
}

let studentObj = new Student("John", 20, "Computer Science");
studentObj.greeting();
studentObj.salute();

let professorObj = new Professor("Prof. John", 40, "Computer Science");
professorObj.greeting();
studentObj.salute();
