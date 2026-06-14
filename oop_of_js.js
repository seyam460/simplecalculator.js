// object oriented programming 
// property , method , state 
// encapsulation . inheritance , polymorphism , abstraction 

const player = {
    name: "lamin yamal",
    age : 16,


    hello : function() {
        console.log("Hello lamin yamal comes from Spain");
    },
};

console.log(player);
console.log(player.name);
console.log(player.hello);
console.log(player.hello());

// javascript is a prototype based language 
// this ,new keyword , constructor function 
// scope 
// local , global 


function player1(name , age, value) {
    this.name = name;
    this.age = age;
    this.value = value;
    this.hello = function() {
        console.log(`Hello ${this.name} comes from Spain`);
    };
}
const player2 = new player1("Messi", 35, 100);
const player3 = new player1("Ronaldo", 38, 80);
const player4 = new player1("Neymar", 30, 90);
const player5 = new player1("Mbappe", 25, 85);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(player5);


// How new works in js : {}, ekta fakha ghor create hoii 


// class in js , function is also a object in js , string is also a object in js , array is object in js 

class animal {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`Hello ${this.name} is an animal`);
    }
}

const animal1 = new animal("Dog", 5);
const animal2 = new animal("Cat", 3);
const animal3 = new animal("Elephant", 10);

console.log(animal1);
console.log(animal2);
console.log(animal3);

class mathulity {
    static add(a , b) {
        return a+b;
    }
}

console.log(mathulity.add(5, 10));

class vehicle {
    constructor(name)
 {
    this.name = name;
 }
 type() {
    console.log(`this is ${this.name} vehicle and brand new vehicle`);
 }

}

const vehicle1 = new vehicle("car");
console.log(vehicle1.type());


class Shape {
    area() {
        return "area of shape";
    }
}

class circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(new circle(5).area());



// Bank Account claas 

class bankAccount {

    #balance;
    constructor(owner , initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }
    getbalance() {
        return `Balance of ${this.owner} is ${this.#balance}`;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance = this.#balance + amount;
    }else {
        console.log("Invalid amount");
    }
}

withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance = this.#balance - amount;
        } else {
            console.log("Invalid amount");
        }
    }
}

const myaccount = new bankAccount("Lamin Yamal", 1000);
console.log(myaccount.getbalance());

myaccount.deposit(500);
console.log(myaccount.getbalance());

myaccount.withdraw(200);
console.log(myaccount.getbalance());





