const car = {
    id: 1,
    color: 'red',
    size: 5,
    gasoline: true,
    yearOfProduction: 1995,
    yearOfService: [2000, 2002, 2003, 2005],
    mark: 'volkswagen',

    printInfo: function() {  // metoda
        return this.color + ' ' + this.mark
    }
};

console.log(car.printInfo());

const cars = [];

cars.push(car);

console.log(cars);



// console.log(car.yearOfService[car.yearOfService.length - 1]);

// const person = {};

// person.age = 35;

// console.log(person);

// person.height = 168;
// person.name = "John";
// person.male = true;

// console.log(person);

// Math.random();

class Dog {
    constructor(dogName, age, race) {
      this.dogName = dogName;
      this.age = age;
      this.race = race
    }
  }

const dogOne = new Dog;

const dogs = [];

for (let i = 0; i < 10; i++) {
    dogs.push(new Dog(
        this.dogName = `Azor_${i}`,
        this.age = i,
        this.race = 'mongrel'
    ))
}

console.log(dogs);