import React, { useEffect, useState } from 'react';

function ServiceAppointmentForm() {
    const [state, setState] = useState({
        vin: '',
        customer_name: '',
        date: '',
        time:'',
        reason:'',
        technican: '',
    });
    const [technicians, setTechnicians] = useState([])

    const fetchTechnicians = async () => {
        const technicianUrl = 'http://localhost:8080/api/technicians/'
        const technicianResponse = await fetch(technicianUrl)
        const technicianJson = await technicianResponse.json();
        setTechnicians(technicianJson.technicians)
    }
    useEffect(() => {
        fetchTechnicians()
    }, []);
    
    
    const handleSubmit = async event =>{
        event.preventDefault();
        const data = state
        console.log(data)

        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig)
        if (response.ok) {
            setState({
                vin: '',
                customer_name: '',
                date: '',
                time:'',
                reason:'',
                technician:'',
            });
        }
    }
    const handleChange = event => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.value]: value
        })
    }
    




return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new service appointment</h1>
                <form onSubmit={handleSubmit} id="create-service-appointment-form">
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value = {state.vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">Vin</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value = {state.customer_name}placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                    <label htmlFor="customer_name">Customer Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value = {state.date} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                    <label htmlFor="date">Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value = {state.time} placeholder="Time" required type="time" name="time" id="time" className="form-control" />
                    <label htmlFor="time">Time</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value = {state.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                    <label htmlFor="reason">Reason</label>
                </div>
                <div className="mb-3">
                    <select onChange={handleChange} value = {state.technican} required name="technician" id="technician" className="form-select">
                    <option value="">Choose a technician</option>
                    {technicians.map(technician => {
                        return (
                        <option key={technician.employee_number} value={technician.employee_number}>{technician.technician_name}</option>
                        )
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Create appointment</button>
                </form>
            </div>
            </div>
        </div>
        );
    }


    export default ServiceAppointmentForm;