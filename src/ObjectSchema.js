export default class ObjectSchema {
  constructor() {
    this.template = [];
    this.validators = [
      (objToCheck) => typeof objToCheck === "object" && objToCheck !== null,
      (objToCheck) =>
        Object.keys(this.template).length === Object.keys(objToCheck).length,
    ];
  }

  shape(template) {
    this.template = template;
    this.validators.push((objToCheck) =>
      Object.entries(objToCheck).every(([key, value]) =>
        template[key].isValid(value)
      )
    );

    return this;
  }

  isValid(objToCheck) {
    return this.validators.every((validator) => validator(objToCheck));
  }
}
