// lec 4
let rows = [8, 15, 21, 27, 31, 27, 21, 15, 8];

for (let i = 0; i < rows.length; i++) {
    console.log("*".repeat(rows[i]));
}



const start = new Date().getTime();
const end = start + 10000; 

while (new Date().getTime() < end) {
    
}
console.log("\n", "10 секунд минуло!");
console.log("\n");




// lec 7
const car = {
    speedometer: 0
};

Object.defineProperties(car, {

    setSpeedometer: {
        value: function (value) {
            this.speedometer = value;
            return this; 
        }
    },

    getSpeedometer: {
        value: function () {
            console.log(this.speedometer);
            return this; 
        }
    },

    clearSpeedometer: {
        value: function () {
            this.speedometer = 0;
            return this;
        }
    }
});


car.setSpeedometer(200)
   .setSpeedometer(300)
   .getSpeedometer()
   .clearSpeedometer()
   .getSpeedometer();
console.log("\n");   



// Завдання 2
/* Створити щонайменше 3 функції-конструктори / класи
   Приклад: Тварина → Ссавець → Кіт
*/

//Animal
function Animal(name) {
    this.name = name;
}

Animal.prototype.say = function () {
    console.log(this.name + " makes a sound.");
};

//Mammal
function Mammal(name, blood) {
    Animal.call(this, name);
    this.blood = blood;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.feed = function () {
    console.log(this.name + " feeds children with milk.");
};

//Cat
function Cat(name) {
    Mammal.call(this, name, "warm");
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function () {
    console.log(this.name + " says meow.");
};

//Перевірка
const c = new Cat("Barsik");

c.say();       // мяв
c.feed();      // успадковано

console.log("\n");





// Завдання 3

/* Чому {}.toString() - "[object Object]"?
   Тому що метод береться не з обєкта, а з Object.prototype.toString, який повертає:
   "[object" + internalClass + "]"
   Для звичайного обєкта internalClass = "object"
*/

/* Чому [].toString() Не повертає "[object Array]"?
   Бо масив має свій власний toString
*/

/* Як вивести "[object Array]" для масиву?
   Викликати метод Object.prototype.toString вручну
*/

console.log("\n", Object.prototype.toString.call([]));



