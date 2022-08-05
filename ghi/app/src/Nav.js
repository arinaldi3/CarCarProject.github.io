import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" >Dealership Inventory</a> 
            <ul className="dropdown-menu"> 
              <li><NavLink className='dropdown-item' to="/manufacturers/new">Create a Manufacturer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturer List</NavLink></li>
              <li><NavLink className="dropdown-item" to="/vehicles/new">Create a Car Model</NavLink></li>
              <li><NavLink className="dropdown-item" to="/vehicles">Car Model List</NavLink></li>
              <li><NavLink className="dropdown-item" to="/automobiles/new">Create a Vehicle</NavLink></li>
              <li><NavLink className="dropdown-item" to="/automobiles">Vehicle List</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Services</a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/technicians/new">Enter a Technician</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments/new">Enter a Service Appointment</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments">Service Appointment List</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments/history">Service Appointment History</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">Sales</a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/sales/new">Create a Sales Record</NavLink></li>
              <li><NavLink className="dropdown-item" to="/salesperson">Add a Salesperson</NavLink></li>
              <li><NavLink className="dropdown-item" to="/customers">Add a New Customer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales">Car Sales List</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/list">History of Car Sales</NavLink></li>
            </ul>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
