import React, { useEffect,useState } from 'react';

function AutomobileForm() {
    const [state, setState] = useState({
        vin:'',
        color:'',
        year:'',
        model_id:'',
    });
    const [models, setModels] = useState([])

    const fetchAutomobiles = async () => {
        const autoUrl = 'http://localhost:8100/api/models/'
        const automobileResponse = await fetch(autoUrl)
        const automobileData = await automobileResponse.json();
        setModels(automobileData.models)
    }
    useEffect(() => {
        fetchAutomobiles()
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        const data = state;
        console.log(data)

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
                model_id:'',
            });
        }
    }
    const handleChange = event => {
        let value = event.target.value;
        if (event.target.name === "year" || event.target.name === "model_id"){
            value = Number(value)
        }
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
                <input onChange={handleChange} value = {state.year}placeholder="Year" required type="number" name="year" id="year" className="form-control" />
                <label htmlFor="name">Year</label>
            </div>
            <div className="mb-3">
                    <select onChange={handleChange} value = {state.model_id} required name="model_id" id="model_id" className="form-select">
                    <option value="">Choose a Model</option>
                    {models.map(model => {
                        return (
                        <option key={model.id} value={model.id}>{model.name}</option>
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

export default AutomobileForm;