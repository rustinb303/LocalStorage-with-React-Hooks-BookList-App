import React from 'react';
import type { Customer } from '../types';

interface CustomerDetailsProps {
  customer: Customer;
  onClose: () => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, onClose }) => {
  return (
    <div className="customer-details">
      <h2>Customer Details</h2>
      <div className="details-content">
        <p><strong>Name:</strong> {customer.firstName} {customer.lastName}</p>
        <p><strong>Address:</strong> {customer.address}</p>
        <p><strong>Phone:</strong> {customer.phoneNumber}</p>
        <p><strong>Household Size:</strong> {customer.householdSize}</p>
        <p><strong>Seniors in Household:</strong> {customer.seniorCount}</p>
        
        <h3>Visit History</h3>
        {customer.visits.length > 0 ? (
          <ul className="visit-list">
            {customer.visits.map((visit, index) => (
              <li key={index}>
                {new Date(visit.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No visits recorded</p>
        )}
        
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomerDetails;
