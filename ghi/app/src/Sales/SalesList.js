import React, { Component } from 'react';
// import { renderMatches } from 'react-router-dom';

class SalesList extends Component {
    constructor(props) {
        super(props);
        this.state = {sales: []}
    }

    async componentDidMount() {
        const url = "http://localhost:8090/api/sales/"
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ sales: data.sales})
        }
    }

render() {
    return (
        <>
            <h1>Car Sales</h1>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salesperson</th>
                    <th>Employee Number</th>
                    <th>Customer</th>
                    <th>Vin</th>
                    <th>Sale Price</th>
                </tr>
            </thead>
            <tbody>
                {this.state.sales.map(sale => {
                    console.log(sale)
                    return (
                        <tr key={sale.automobile.vin}>
                            <td>{sale.salesperson.name}</td>
                            <td>{sale.salesperson.employee_number}</td>
                            <td>{sale.customer.name}</td>
                            <td>{sale.automobile.vin}</td>
                            <td>{sale.sale_price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
        );
    }
}
export default SalesList;