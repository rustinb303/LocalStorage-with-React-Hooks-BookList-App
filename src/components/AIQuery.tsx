import React, { useState, FormEvent } from 'react';
import type { Customer, Visit } from '../types.d';

interface AIQueryProps {
  customers: Customer[];
}

const AIQuery: React.FC<AIQueryProps> = ({ customers }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically make an API call to an AI service
    // For now, we'll just set a placeholder response
    const data = {
      query,
      customers: customers.map(customer => ({
        ...customer,
        visits: customer.visits.map((visit: Visit) => new Date(visit.timestamp).toISOString())
      }))
    };
    
    setResponse(`Query received: "${query}"\nProcessing data for ${customers.length} customers...`);
    setQuery('');
  };

  return (
    <div className="ai-query-container">
      <h2>Ask About Customer Data</h2>
      <form onSubmit={handleQuery}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question about customer data..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ask Question
        </button>
      </form>
      {response && (
        <div className="response-container mt-3">
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default AIQuery;
