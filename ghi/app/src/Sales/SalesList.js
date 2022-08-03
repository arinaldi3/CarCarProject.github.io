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
                {this.state.sales.map(salesperson => {
                    return (
                        <tr key={salesperson.automobile}>
                            <td>{salesperson.salesperson.name}</td>
                            <td>{salesperson.salesperson.employee_number}</td>
                            <td>{salesperson.year}</td>
                            <td>{salesperson.automobile}</td>
                            <td>{salesperson.sale_price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        );
    }
}
export default SalesList;