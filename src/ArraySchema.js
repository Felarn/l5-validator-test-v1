export default class ArraySchema {
  constructor() {
    this.validators = [(value) => Array.isArray(value)];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  length(wantedLength) {
    this.validators.push((arr) => arr.length === wantedLength);
    return this;
  }
}
