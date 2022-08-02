import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';

import ManufacturerList from './Inventory/ManufacturerList';
import VehicleList from './Inventory/VehicleList';
import AutomobileList from './Inventory/AutomobileList';

import SalesList from './Sales/SalesList';
import SalesForm from './Sales/SalesForm';
import SalespersonForm from './Sales/SalespersonForm';
import CustomerForm from './Sales/CustomerForm';
import SalesHistoryList from './Sales/SalesHistoryList';



function App(props) {
 
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" >
            <Route path="new" element={<ServiceAppointmentForm/>} />
            <Route path="" element={<ServiceAppointmentList/>}/>
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
          </Route>
          <Route path="vehicles">
            <Route index element={<VehicleList />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
          </Route>
          <Route path="/sales">
            <Route index element={<SalesList />} />
            <Route path="new" element={<SalesForm/>} />
            <Route path="list" element={<SalesHistoryList/>} />
          </Route>
          <Route path="salesperson">
            <Route index element={<SalespersonForm/>} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerForm/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
