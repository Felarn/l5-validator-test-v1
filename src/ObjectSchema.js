export default class ObjectSchema {
  constructor() {
    this.template = [];
    this.validators = [
      (objToCheck) => typeof objToCheck === "object" && objToCheck !== null,
      (objToCheck) => {
        // console.log(objToCheck);
        // console.log(Object.keys(this.template).length);
        // console.log(Object.keys(objToCheck).length);
        Object.keys(this.template).length === Object.keys(objToCheck).length;
      },
    ];
  }

  shape(template) {
    this.template = template;
    // console.log("===============================>", template);

    this.validators.push((objToCheck) =>
      Object.entries(objToCheck).every(([key, value]) => {
        console.log(key, value);
        return template[key].isValid(value);
      })
    );

    return this;
  }

  isValid(objToCheck) {
    return this.validators.every((validator) => validator(objToCheck));
  }
}
