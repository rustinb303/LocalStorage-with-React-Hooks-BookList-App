import React, { useState, useEffect } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import AIQuery from './components/AIQuery';
import { Customer } from './types';

const getCustomersFromLS = () => {
  const data = localStorage.getItem('customers');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export const App = () => {
  const [customers, setCustomers] = useState<Customer[]>(getCustomersFromLS());
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleAddCustomer = (customer: Customer) => {
    setCustomers([...customers, customer]);
  };

  const handleCheckIn = (customerId: string) => {
    setCustomers(customers.map(customer => {
      if (customer.id === customerId) {
        return {
          ...customer,
          visits: [...customer.visits, { timestamp: Date.now() }]
        };
      }
      return customer;
    }));
  };

  const handleViewDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  return (
    <div className='wrapper'>
      <h1>Erie Food Bank CRM</h1>
      <div className='main'>
        <CustomerForm onSubmit={handleAddCustomer} />
        
        <CustomerList
          customers={customers}
          onCheckIn={handleCheckIn}
          onViewDetails={handleViewDetails}
        />
        
        {selectedCustomer && (
          <CustomerDetails
            customer={selectedCustomer}
            onClose={() => setSelectedCustomer(null)}
          />
        )}
        
        <AIQuery customers={customers} />
      </div>
    </div>
  );
}

export default App
