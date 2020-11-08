/**
 Exercise 1:
 Define a filter function on the String object. The function accepts an array of strings that
 specifies a list of banned words. The function returns the string after removing all the
 banned words.
 Example:
 console.log("This house is not nice!".filter('not'));
 Output: "This house is nice!"
 */
String.prototype.filter = function(s) {
    return this.replaceAll(s, "").replaceAll("  "," ");
}

/**
Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
    Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
*/

Array.prototype.bubbleSort = function () {
    let n = this.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this[j] > this[j+1]) {
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    return this;
}

/**
Exercise 3:
Create an object called Teacher derived from a Person function constructor, and implement
a method called teach that receives a string called subject, and prints out: [teacher's name]
is now teaching [subject]. Create a Teacher object and call its teach method.
*/
function ex3A() {
    let Person = function (name) {
        this.name = name;
    }

//create subclass
    let Teacher = function (name) {
        Person.call(this, name);
    }
    Teacher.prototype.teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
//create an object
    let anna = new Teacher("Anna Dole");
    anna.teach("English");
}



/**
 Also do the same thing using Object.create. When using Object.create you will need a
 factory function instead of a function constructor in order to pass parameters such as
 ‘name’ to be set in the prototype.
 */
function ex3B() {
    let Person = {
        name: "unknown",
        setName(name) {
            this.name = name;
        }
    }
//create subclass
    let Teacher = Object.create(Person);
    Teacher.teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
//create an object
    let anna = Object.create(Teacher);
    anna.setName("Anna Kyle");
    anna.teach("English");

}

/**
 * Exercise 4:
 Write code that will create person, student, and professor objects.
 */

/**
 Person objects have
 o name and age fields
 o a greeting method that prints out: “Greetings, my name is [name] and I am
 [age] years old.”
 o a salute method that prints out: “Good morning!, and in case I dont see you,
 good afternoon, good evening and good night!”
 */
function ex4A () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greeting() {
            console.log('Greetings, my name is '+ this.name +' and I am ' +
                this.age +' years old.');
        }
        salute() {console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!'); }
    }

    /**
     • Student objects inherit name, age, and salute from person. They also have a field
     ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
     [name] and I am studying [major]. The greeting should be output to the console.
     */

    class Student extends Person {
        constructor(name, age, major) {
            super(name, age);
            this.major = major;
        }
        greeting() {
            console.log('Hey, my name is '+ this.name +' and I am studying ' +
                this.major+'.');
        }
    }

    /**
     • Professor objects inherit name, age, and salute from person. They also have a field
     ‘department’ and have their own greeting method. Their salutation is “Good day,
     my name is [name] and I am in the [department] department.” Output it to the
     console.
     */

    class Professor extends Person {
        constructor(name, age, department) {
            super(name, age);
            this.department = department;
        }
        greeting() {
            console.log('Good day, my name is '+ this.name +' and I am in the ' +
                this.department + ' department.');
        }
    }

    /**
     • Create a professor object and a student object. Call both the greeting and salutation
     methods on each.
     */
    let prof_pete = new Professor('Pete Pan', 45, 'Computer Science');
    prof_pete.greeting();
    prof_pete.salute();

    let stu_anna = new Student('Anna Red', 25, 'English');
    stu_anna.greeting();
    stu_anna.salute();
}



/**
 • Object prototype approach for inheritance
 */
function ex4B () {
    let Person = {
        name: "unknown",
        age: -1,
        greeting() {
            console.log('Greetings, my name is '+ this.name +' and I am ' +
                this.age +' years old.');
        },
        salute() {console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!'); }

    }


//create subclass
    let Student = Object.create(Person)
    Student.major =  "Unknown";

    Student.greeting = function () {
        console.log('Hey, my name is '+ this.name +' and I am studying ' +
            this.major+'.');
    }

    let Professor = Object.create(Person)
    Professor.department =  "Unknown";

    Professor.greeting = function () {
        console.log('Good day, my name is '+ this.name +' and I am in the ' +
            this.department + ' department.');
    }
//create an object
    let prof_pete = Object.create(Professor);
    prof_pete.name ='Pete Pan';
    prof_pete.age = 45;
    prof_pete.department = 'Computer Science';
    prof_pete.greeting();
    prof_pete.salute();

    let stu_anna = Object.create(Student);
    stu_anna.name ='Anna Red';
    stu_anna.age = 25;
    stu_anna.department = 'English';
    stu_anna.greeting();
    stu_anna.salute();
}



/**
 *  function constructor
 */
function ex4C () {
    let Person = function (name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function() {
        console.log('Greetings, my name is '+ this.name +' and I am ' +
            this.age +' years old.');
    }
    Person.prototype.salute = function() {
        console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
    }

//create subclass Student
    let Student = function (name, age, major) {
        Person.call(this, name, age);
        this.major = major;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.greeting = function() {
        console.log('Hey, my name is '+ this.name +' and I am studying ' +
            this.major+'.');
    }


//create subclass
    let Professor = function (name, age, department) {
        Person.call(this, name, age);
        this.department = department;
    }
    Professor.prototype = Object.create(Person.prototype);
    Professor.prototype.greeting = function() {
        console.log('Good day, my name is '+ this.name +' and I am in the ' +
            this.department + ' department.');
    }


//create an object
    let prof_pete = new Professor('Pete Pan', 45, 'Computer Science');
    prof_pete.greeting();
    prof_pete.salute();

    let stu_anna = new Student('Anna Red', 25, 'English');
    stu_anna.greeting();
    stu_anna.salute();
}
