import React, { useState } from 'react';

function CustomerForm() {
    const [state, setState] = useState({
        name:'',
        address: '',
        phone_number: '',
    });


    const handleSubmit = async event => {
        event.preventDefault();
        const data = state; 

        const customerUrl = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
            setState({
                name: '',
                address: '',
                phone_number: '',
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
            <h1>Add a Customer</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.name}placeholder="Customer Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.address}placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.phone_number}placeholder="Phone Number" required type="number" name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="phone_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    );
}

export default CustomerForm;
