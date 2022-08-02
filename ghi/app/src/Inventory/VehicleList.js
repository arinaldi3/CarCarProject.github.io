import React, { useEffect, useState} from 'react';

function VehicleList() {
    const [vehicles, setVehicles] = useState([])

    const fetchVehicles = async () => {
        const url = 'http://localhost:8100/api/models/'
        const response = await fetch(url)
        const vehiclesJson = await response.json();
        setVehicles(vehiclesJson.models)
    }
    useEffect(() => {
        fetchVehicles()
    }, []);

return (
        <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            {vehicles.map((vehicle) => {
                return (
                    <tr key={vehicle.id}>
                        <td>{vehicle.manufacturer.name}</td>
                        <td>{vehicle.name}</td>
                        <td>
                            <img src={vehicle.picture_url} alt="" />
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    );
}

export default VehicleList;