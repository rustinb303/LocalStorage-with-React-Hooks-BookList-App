import React, { useState, useEffect } from 'react';

function CheckInCustomer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
    const customer = customers.find(
      (c) => c.firstName === firstName && c.lastName === lastName
    );
    if (customer) {
      const updatedCustomers = [...customers];
      const updatedCustomer = { ...customer };
      const index = customers.findIndex(
        (c) => c.firstName === firstName && c.lastName === lastName
      );
      customers[index] = {...customer, visits: [...customer.visits, new Date()]}
      setCustomers(customers);
      console.log('Customer checked in', firstName, lastName);
    } else {
      console.log("customer not found")
    }

    setFirstName('');
    setLastName('');
  };

  return (
    <div className="check-in-customer-container">
      <h2>Check In Customer</h2>
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" className="form-control" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <label>Last Name</label>
        <input type="text" className="form-control" required onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Check In
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

export default CheckInCustomer;
