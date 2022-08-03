import React, { useState } from 'react';

function TechnicianForm(){
    const [state, setState] = useState({
        technician_name:'',
        employee_number:'',
    });

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const technicianUrl = 'http://localhost:8080/api/technicians/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const technicianResponse  = await fetch(technicianUrl, fetchConfig)
        if (technicianResponse.ok) {
            setState({
                technician_name:'',
                employee_number:'',
            });
        }
    }
        const handleChange = event => {
            const value = event.target.value;
            setState({
                ...state,
                [event.target.name]: value
            })
        }
    return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add a Technician</h1>
                <form onSubmit={handleSubmit} id="create-customer-form">
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value = {state.technician_name}placeholder="Technician Name" required type="text" name="technician_name" id="technician_name" className="form-control" />
                    <label htmlFor="name">Technician Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value = {state.employee_number}placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                    <label htmlFor="employee_number">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
}

export default TechnicianForm;