import React, { Component } from 'react';

class SalesHistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: [],
            salespeople: [],
            salesperson: '',
            filteredSales: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateRecords = this.updateRecords.bind(this)
    }

    async componentDidMount() {
        const salesUrl = "http://localhost:8090/api/sales"
        const salespeopleUrl = "http://localhost:8090/api/salespeople"

        const salesResponse = await fetch(salesUrl);
        const salespeopleResponse = await fetch(salespeopleUrl)

        if (salesResponse.ok && salespeopleResponse.ok) {
            const salesData = await salesResponse.json();
            const salespeopleData = await salespeopleResponse.json();
            console.log(salesData)

            // const unfilteredSalesRecord = salesData.sales.map(sales => sales.salespeople)
            // const filteredSalesRecord = salespeopleData.
            // console.log(filteredSalesRecord)

            this.setState({
                sales: salesData.sales,
                salespeople: salespeopleData.salespeople})
        }
    }
    updateRecords(salesperson) {
        let newArr = []
        this.state.sales.forEach((record => {
            if (record.salesperson.employee_number === Number(salesperson)) {
                newArr.push(record)
            }
        }))
        this.setState({
            ...this.state,
            filteredSales: newArr
        })
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            salesperson:value,
        })
        this.updateRecords(value)
    }

render() {
    return (
        <>
        <h1>Sales person history</h1>
        <select onChange={this.handleChange} value={this.state.sales.salesperson}required name="salesperson" id="salesperson" className="form-select">
            <option value="">Choose a salesperson</option>
                    {this.state.salespeople.map(salesperson => {
                        return (
                        <option key={salesperson.employee_number} value={salesperson.employee_number}>{salesperson.name}</option>
                        )
                    })}
        </select>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sales person</th>
                    <th>Customer</th>
                    <th>Vin</th>
                    <th>Sale price</th>
                </tr>
            </thead>
            <tbody>
                {this.state.filteredSales.map((salesrecord, index) => {
                    return (
                        <tr key={index}>
                            <td>{salesrecord.salesperson.name}</td>
                            <td>{salesrecord.customer.name}</td>
                            <td>{salesrecord.automobile.vin}</td>
                            <td>{salesrecord.sale_price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
     </>
    );
}
}

export default SalesHistoryList;
