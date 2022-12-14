import React, { useState } from 'react';

function ManufacturerForm() {
    const [state, setState] = useState({
        name:'',

    });

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            setState({
                name:'',
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
            <h1>Add a Car Manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.name}placeholder="Manufacturer" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Manufacturer</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    );
}

export default ManufacturerForm;