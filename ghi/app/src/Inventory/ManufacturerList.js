import React, { Component} from 'react';

class ManufacturerList extends Component {
    constructor(props){
        super(props)
        this.state = {manufacturers: []}
    }

    async componentDidMount()
    {
        const url = "http://localhost:8100/api/manufacturers"
        const response = await fetch(url)
        const manufacturerJSON = await response.json()
        this.setState({manufacturers: manufacturerJSON.manufacturers})
    }

render() {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.manufacturers.map(manufacturer => {
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
}


export default ManufacturerList
