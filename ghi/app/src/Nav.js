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
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">Create a new car manufacturer</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">List of all manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehicles/new">Create a new Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vehicles">List of all Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">Create a new vehicle</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">List of all the vehicles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/new">Enter a Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/new">Enter a Service Appontment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments">List of Service Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">Create a sales record</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesperson">Add a sales person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">Add a potential Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/list">List all car sales</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
