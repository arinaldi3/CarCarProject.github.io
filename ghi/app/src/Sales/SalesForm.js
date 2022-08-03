import React from 'react';

class SalesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            automobile: '',
            autos: [],
            salesperson: '',
            salespeople: [],
            customer: '',
            customers: [],
            sale_price: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const autosUrl = "http://localhost:8100/api/automobiles/";
        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const customerUrl = "http://localhost:8090/api/customers/";
        const salesUrl = "http://localhost:8090/api/sales/";

        const autosResponse = await fetch(autosUrl);
        const salespeopleResponse = await fetch(salespeopleUrl);
        const customerResponse = await fetch(customerUrl);
        const salesResponse = await fetch(salesUrl);

        if (autosResponse.ok && salespeopleResponse.ok && customerResponse.ok && salesResponse.ok) {
            const autosData = await autosResponse.json();
            const salespeopleData = await salespeopleResponse.json();
            const customerData = await customerResponse.json();
            const salesData = await salesResponse.json();

            const soldCars = salesData.sales.map(sales => sales.automobile.vin);
            console.log(soldCars)
            const unSoldCars = autosData.autos.filter(autos => !soldCars.includes(autos.vin))
            console.log(unSoldCars)


            this.setState({
                autos: unSoldCars,
                salespeople: salespeopleData.salespeople,
                customers: customerData.customers,
            });
        }

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
        console.log(data);
        delete data.autos;
        delete data.salespeople;
        delete data.customers;
        
        const salesRecordUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: "post", 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesRecordUrl, fetchConfig);
        if (response.ok) {
            const newSalesRecord = await response.json();
            console.log(newSalesRecord);
            this.setState({
                automobile: '',
                salesperson: '',
                customer: '', 
                sale_price: '',
            })
        }
    }
render() {
    return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add Sales Record</h1>
                <form onSubmit={this.handleSubmit} id="create-sales-form">
                <div className="mb-3">
                    <select onChange={this.handleChange} value = {this.state.automobile} required name="automobile" id="automobile" className="form-select">
                    <option value="">Choose an automobile</option>
                    {this.state.autos.map(automobile => {
                        return (
                        <option key={automobile.vin} value={automobile.vin}>{automobile.model.name}</option>
                        )
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleChange} value = {this.state.salesperson} required name="salesperson" id="salesperson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {this.state.salespeople.map(salesperson => {
                        return (
                        <option key={salesperson.name} value={salesperson.name}>{salesperson.name}</option>
                        )
                    })}
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleChange} value = {this.state.customer} required name="customer" id="customer" className="form-select">
                    <option value="">Choose a customer</option>
                    {this.state.customers.map(customer => {
                        return (
                        <option key={customer.id} value={customer.name}>{customer.name}</option>
                        )
                    })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.sale_price}placeholder="Sale price" required type="number" name="sale_price" id="sale_price" className="form-control" />
                    <label htmlFor="starts">Sale price</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

    export default SalesForm;
