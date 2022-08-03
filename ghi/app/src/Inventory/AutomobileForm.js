import React, { useState } from 'react';

function AutomobileForm() {
    const [state, setState] = useState({
        vin:'',
        color:'',
        year:'',
        model:'',
        manufacturer:'',

    });

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const automobileUrl = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok) {
            setState({
                vin:'',
                color:'',
                year:'',
                model:'',
                manufacturer:'',
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
            <h1>Add a new vehicle</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.vin}placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="name">Vin</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.color}placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="name">Color</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.year}placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                <label htmlFor="name">Year</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.model}placeholder="Model" required type="text" name="model" id="model" className="form-control" />
                <label htmlFor="name">Model</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.manufacturer}placeholder="Manufacturer" required type="text" name="Manufacturer" id="Manufacturer" className="form-control" />
                <label htmlFor="name">Manufacturer</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    );
}

export default AutomobileForm;