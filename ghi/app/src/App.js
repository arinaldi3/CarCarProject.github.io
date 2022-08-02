import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';

import ManufacturerList from './Inventory/ManufacturerList';

function App(props) {
  if (props.appointments === undefined){
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/appointments" >
            <Route path="new" element={<ServiceAppointmentForm/>} />
            <Route path="" element={<ServiceAppointmentList appointments={props.appointments}/>}/>
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} /> */}
          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
