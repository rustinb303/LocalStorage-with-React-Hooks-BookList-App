import React, { useState, FormEvent } from 'react';
import type { Customer, Visit } from '../types';

const CustomerForm: React.FC<{ onSubmit: (customer: Customer) => void }> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [householdSize, setHouseholdSize] = useState('');
  const [seniorCount, setSeniorCount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customer: Customer = {
      id: Date.now().toString(),
      firstName,
      lastName,
      address,
      phoneNumber,
      householdSize: parseInt(householdSize, 10),
      seniorCount: parseInt(seniorCount, 10),
      visits: []
    };
    onSubmit(customer);
    // Reset form
    setFirstName('');
    setLastName('');
    setAddress('');
    setPhoneNumber('');
    setHouseholdSize('');
    setSeniorCount('');
  };

  return (
    <div className="form-container">
      <h2>New Customer Registration</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Household Size</label>
          <input
            type="number"
            className="form-control"
            value={householdSize}
            onChange={(e) => setHouseholdSize(e.target.value)}
            min="1"
            required
          />
        </div>
        <div>
          <label>Number of Seniors</label>
          <input
            type="number"
            className="form-control"
            value={seniorCount}
            onChange={(e) => setSeniorCount(e.target.value)}
            min="0"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Register Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
