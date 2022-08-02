import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadSales() {
  const autosUrl = "http://localhost:8100/api/automobiles/";
  const salespeopleUrl = "http://localhost:8090/api/salespeople/";
  const customerUrl = "http://localhost:8090/api/customers/";
  const salesUrl = "http://localhost:8090/api/sales/";

  const autosResponse = await fetch(autosUrl);
  const salespeopleResponse = await fetch(salespeopleUrl);
  const customerResponse = await fetch(customerUrl);
  const salesResponse = await fetch(salesUrl);


  if (autosResponse.ok && salespeopleResponse.ok && customerResponse.ok && salesResponse.ok) {
    const autosData = await autosResponse.json();
    const salespeopleData = await salespeopleResponse.json();
    const customerData = await customerResponse.json();
    const salesData = await salesResponse.json();
    
    root.render(
      <React.StrictMode>
        <App 
          autos={autosData.autos}
          salespeople={salespeopleData.salespeople}
          customers={customerData.customers}
          sales={salesData.sales}
        />
      </React.StrictMode>
    );
  }
}
loadSales();