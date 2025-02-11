import React from 'react';
import type { Customer } from '../types.d';

interface CustomerListProps {
  customers: Customer[];
  onCheckIn: (customerId: string) => void;
  onViewDetails: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onCheckIn, onViewDetails }) => {
  return (
    <div className="view-container">
      <h2>Customer List</h2>
      {customers.length > 0 ? (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Household Size</th>
                <th>Total Visits</th>
                <th>Last Visit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{`${customer.firstName} ${customer.lastName}`}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.householdSize}</td>
                  <td>{customer.visits.length}</td>
                  <td>
                    {customer.visits.length > 0
                      ? new Date(customer.visits[customer.visits.length - 1].timestamp).toLocaleString()
                      : 'Never'}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onCheckIn(customer.id)}
                    >
                      Check In
                    </button>
                    <button
                      className="btn btn-info btn-sm ml-2"
                      onClick={() => onViewDetails(customer)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No customers registered yet</p>
      )}
    </div>
  );
};

export default CustomerList;
