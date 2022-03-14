class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    let result
    if (this.sex === "male") result = `It's me! ${this.name}, the parrot!`;
    else {
      result = `${this.name} says squawk!`;
    }
    return result;
  }
}
