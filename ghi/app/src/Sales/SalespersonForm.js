import React from 'react';

class SalespersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employee_number: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(event) {
        const value = event.target.value
        const key = event.target.name
        const changeDict = {}
        changeDict[key] = value
        this.setState(changeDict)
}
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data)
        delete data.employee_number;

        const salespersonUrl = "http://localhost:8090/api/salespeople/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salespersonUrl, fetchConfig)
        if (response.ok) {
            const newSalesperson = await response.json();
            console.log(newSalesperson);
            const cleared = {
                name: '',
                employee_number: '',     
            }
            this.setState(cleared);
        }
}
render() {
    return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add Salesperson</h1>
                <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.name}placeholder="Salesperson Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="starts">Salesperson Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.employee_number}placeholder="Employee Number" required type="number" name="employee_number" id="employee_number" className="form-control" />
                    <label htmlFor="starts">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default SalespersonForm;