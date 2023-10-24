export default class NumberSchema {
  //   constructor(value) {
  //     this.value = value;
  //     return this;
  //   }
  constructor() {
    this.validators = [(value) => typeof value === "number"];
  }

  isValid(value) {
    // if (typeof value !== "number") return false;

    return this.validators.every((validator) => validator(value));
  }

  odd() {
    this.validators.push((value) => value % 2 !== 0);
    return this;
  }

  even() {
    this.validators.push((value) => value % 2 === 0);
    return this;
  }
}
