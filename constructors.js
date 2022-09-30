let Address = class {
  constructor(country, city, street, number) {
    (this.country = country),
      (this.city = city),
      (this.street = street),
      (this.number = number);
  }
};
let Citizen = class {
  constructor(firstname, lastname, age, registered) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.age = age),
      (this.registered = registered),
      function setAddress(address) {
        (this.address = address), (this.registered = true);
      };
  }
};

export { Address, Citizen };
