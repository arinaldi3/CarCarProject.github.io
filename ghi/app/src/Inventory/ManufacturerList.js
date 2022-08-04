import React, { useEffect, useState} from 'react';

function ManufacturerList(){

 const [manufacturers, setManufacturers] = useState([])

  const fetchManufacturers = async () => {
      const url = 'http://localhost:8100/api/manufacturers/'
      const response = await fetch(url)
      const manufacturersJson = await response.json();
      setManufacturers(manufacturersJson.manufacturers)
  }
  useEffect(() => {
      fetchManufacturers()
  }, []);


return (
    <>
        <h1>Manufacturers</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    );
}


export default ManufacturerList;
