import React, { useEffect, useState } from 'react';

function VehicleForm() {
    const [state, setState] = useState({
        name:'',
        manufacturer_id:'',
        picture_url:'',

    });
    const [manufacturers, setManufacturers] = useState([])

    const fetchManufacturers = async () => {
        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const manufacturerResponse = await fetch(manufacturerUrl)
        const manufacturerJson = await manufacturerResponse.json();
        setManufacturers(manufacturerJson.manufacturers)
    }
    useEffect(() => {
        fetchManufacturers()
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;

        const vehicleUrl = 'http://localhost:8100/api/models/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(vehicleUrl, fetchConfig);
        if (response.ok) {
            setState({
                name:'',
                manufacturer_id:'',
                picture_url:'',
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
            <h1>Add a new Model</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.name}placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value = {state.picture_url}placeholder="Picture Url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="name">Picture</label>
            </div>
            <div className="mb-3">
                    <select onChange={handleChange} value = {state.manufacturer_id} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                    <option value="">Choose a Manufacturer</option>
                    {manufacturers.map(manufacturer => {
                        return (
                        <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                        )
                    })}
                    </select>
                </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    );
}

export default VehicleForm;