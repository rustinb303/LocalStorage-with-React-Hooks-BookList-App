class Customer {
  constructor(firstName, lastName, address, phoneNumber, householdSize, numberOfSeniors) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.householdSize = householdSize;
    this.numberOfSeniors = numberOfSeniors;
    this.visits = [];
  }
}
export default Customer;
