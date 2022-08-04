import React, { useEffect, useState} from 'react';

function AutomobileList() {
    const [models, setModels] = useState([])

    const fetchAutomobiles = async () => {
        const url = 'http://localhost:8100/api/automobiles/'
        const response = await fetch(url)
        const autosJson = await response.json();
        setModels(autosJson.autos)
    }
    useEffect(() => {
        fetchAutomobiles()
    }, []);

return (
    <>
        <h1>Automobiles</h1>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>Vin</th>
                <th>Color</th>
                <th>Year</th>
                <th>Model</th>
                <th>Manufacturer</th>
            </tr>
        </thead>
        <tbody>
            {models.map(model => {
                return (
                    <tr key={model.vin}>
                        <td>{model.vin}</td>
                        <td>{model.color}</td>
                        <td>{model.year}</td>
                        <td>{model.model.name}</td>
                        <td>{model.model.manufacturer.name}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </>
    );
}

export default AutomobileList;