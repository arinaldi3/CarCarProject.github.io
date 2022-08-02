import React, { Component } from 'react'


class ServiceAppointmentList extends Component {
    constructor(props){
        super(props)
        this.state = {appointments: []}
    }
    async componentDidMount()
    {
        const url = 'http://localhost:8080/api/appointments/'
        const response = await fetch(url)
        if (response.ok)
        {
        const data = await response.json()
        this.setState({appointments: data.appointments})
        }
    }


    render(){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Customer name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Reason</th>
                        <th>Technician</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td> {appointment.vin} </td>
                                <td> {appointment.customer_name} </td>
                                <td> {appointment.date} </td>
                                <td> {appointment.time} </td>
                                <td> {appointment.reason} </td>
                                <td> {appointment.technician} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
export default ServiceAppointmentList;