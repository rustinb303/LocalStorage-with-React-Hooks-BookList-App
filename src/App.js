import React, { useState, useEffect } from 'react';
import CreateCustomer from './components/CreateCustomer';
import CheckInCustomer from './components/CheckInCustomer';
import ViewCustomers from './components/ViewCustomers';
import AskAI from './components/AskAI';

export const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  return (
    <div className="wrapper">
      <h1>Erie Food Bank</h1>
      <p>Manage Customers and track their visits</p>
      <div className="main">
        <CreateCustomer />
        <CheckInCustomer />
        <ViewCustomers />
        <AskAI />
      </div>
    </div>
  );
};

export default App;
