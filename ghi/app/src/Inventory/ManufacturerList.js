import React, { Component, useEffect, useState} from 'react';
// class ManufacturerList extends Component {
//     constructor(props){
//         super(props)
//         this.state = {manufacturers: []}
//     }

//     async componentDidMount()
//     {
//         const url = "http://localhost:8100/api/manufacturers"
//         const response = await fetch(url)
//         const manufacturerJSON = await response.json()
//         this.setState({manufacturers: manufacturerJSON.manufacturers})
//     }
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
    );
            }


export default ManufacturerList;
