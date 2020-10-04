let person = {
    //key: value;
    name: 'Quang Anh',
    age: 19,
    status: 'single',
    hobbies: ['Play Valorant, Play League of Legend'],
}

//Create
    person.hair = 'Black';
    person['skill'] = ['Coding','Play game'];

    console.log(person.skill[0]);

//Update
    person.age++;
    person.hair = 'white';

    console.log(person);

//Delete
    delete person.age;
    console.log(person);

//Function
    // function everything(var1,var2,...) {
    //     //do something here
    // return something;
    // }

function calculateSum(a,b) {
    return a+b;
}

console.log(calculateSum(3,4));

function helloWorld() {
    console.log('helloWorld');
}

//Methods
person.sing =function() {
    console.log('LOLO');
    return this;
}
console.log(person);

person.weight= 70;
person.eat = function(meal) {
    //this
    console.log(meal);
    this.weight+= meal.weight;
}

person.eat({
    name: 'All',
    weight: 2,
});
console.log(person);


function Person(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
}

const person1=new Person('Quang Hung', 17, 'singer');
const person2=new Person('Nhat', 1, 'singer');
console.log(person1);
console.log(person2);