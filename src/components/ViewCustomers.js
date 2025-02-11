import React, { useState, useEffect } from 'react';

function ViewCustomers() {
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
    return (
        <div className="view-customers-container">
            <h2>View Customers</h2>
            <div>
                {customers.map((customer) => (
                    <div key={customer.firstName + customer.lastName} className='customer-info'>
                        <p><b>Name:</b> {customer.firstName} {customer.lastName}</p>
                        <p><b>Address:</b> {customer.address}</p>
                        <p><b>Phone Number:</b> {customer.phoneNumber}</p>
                        <p><b>Household Size:</b> {customer.householdSize}</p>
                        <p><b>Number of Seniors:</b> {customer.numberOfSeniors}</p>
                        <p><b>Visits:</b> {customer.visits.map((visit) => visit.toLocaleString()).join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewCustomers;
