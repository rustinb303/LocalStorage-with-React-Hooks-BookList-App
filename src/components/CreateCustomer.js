import React, { useState, useEffect } from 'react';
import Customer from '../models/Customer';

function CreateCustomer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [householdSize, setHouseholdSize] = useState('');
  const [numberOfSeniors, setNumberOfSeniors] = useState('');
  const [customers, setCustomers] = useState(getDatafromLS());

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  const getDatafromLS = () => {
    const data = localStorage.getItem('customers');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = new Customer(
      firstName,
      lastName,
      address,
      phoneNumber,
      householdSize,
      numberOfSeniors
    );

    // If customer already exists, update existing customer
    const existingCustomerIndex = customers.findIndex((c) => c.firstName === newCustomer.firstName && c.lastName === newCustomer.lastName);
    if (existingCustomerIndex !== -1){
      const existingCustomer = customers.find((c) => c.firstName === newCustomer.firstName && c.lastName === newCustomer.lastName);
      const updatedCustomers = customers.filter((c) => c.firstName !== newCustomer.firstName || c.lastName !== newCustomer.lastName);
      const updatedCustomersList = [...updatedCustomers, newCustomer]
      setCustomers(updatedCustomersList)
    } else {
      setCustomers([...customers, newCustomer]);
    }

    

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setAddress('');
    setPhoneNumber('');
    setHouseholdSize('');
    setNumberOfSeniors('');
  };

  return (
    <div className="create-customer-container">
      <h2>Create New Customer</h2>
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" className="form-control" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <label>Last Name</label>
        <input type="text" className="form-control" required onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <label>Address</label>
        <input type="text" className="form-control" required onChange={(e) => setAddress(e.target.value)} value={address} />
        <label>Phone Number</label>
        <input type="text" className="form-control" required onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
        <label>Household Size</label>
        <input type="text" className="form-control" required onChange={(e) => setHouseholdSize(e.target.value)} value={householdSize} />
        <label>Number of Seniors</label>
        <input type="text" className="form-control" required onChange={(e) => setNumberOfSeniors(e.target.value)} value={numberOfSeniors} />
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Create
        </button>
      </form>
    </div>
  );
}

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('customers');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export default CreateCustomer;
