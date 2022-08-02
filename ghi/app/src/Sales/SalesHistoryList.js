import React, { useEffect, useState} from 'react';

function SalesHistoryList() {
    const [salespeople, setSalespeople] = useState([])
    const [salesHistory, setSalesHistory] = useState([])
    const [salesData, setSalesData] = useState([])

    useEffect(() => {
        const fetchSalesData = async () => {
            const url = 'http://localhost:8090/api/sales/'
            const response = await fetch(url)
            const salespeopleJson = await response.json();
            setSalespeople(salespeopleJson.sales);
            setSalesData(salespeopleJson.sales);
        };
        fetchSalesData();
    }, []);

    const handleChange = event => {
        const value = event.target.value;
        setSalesHistory({
            ...salesHistory,
            [event.target.name]:value,
        })
    }
    return (
        <>
        <h1>Sales person history</h1>
        <select onChange={handleChange} value={salesHistory} required name="Sales history" id="salesperson" className="form-select">
            <option value="">Choose a salesperson</option>
                    {salespeople.map(salesperson => {
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
                {salesData.map(salesperson => {
                    return (
                        <tr key={salesperson.vin}>
                            <td>{salesperson.salesperson.name}</td>
                            <td>{salesperson.customer}</td>
                            <td>{salesperson.vin}</td>
                            <td>{salesperson.sale_price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
     </>
    );
}

export default SalesHistoryList;