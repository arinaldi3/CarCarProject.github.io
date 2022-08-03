import React, { Component } from 'react';

function ServiceAppointmentHistory() {

    const [search, setSearch] = useState ('')
    const [appointment, setAppointment] = useState ([])
    const [filteredAppointments, setfilteredAppointments] = useState ([])

    const fetchAppointments = async () => {
        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const response = await fetch(appointmentUrl)
        const appointmentData = await response.json();
        setAppointment(appointmentData.appointments)
    }

    const handleClick = async
}

return (
    <>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search VIN" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => appointments.filter(appointment => appointment.vin===search)}>Search VIN</button>
        </form>
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
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            <td> {appointment.vin} </td>
                            <td> {appointment.customer_name} </td>
                            <td> {new Date(appointment.date).toLocaleDateString()} </td>
                            <td> {new Date(appointment.date).toLocaleTimeString('en-US')} </td>
                            <td> {appointment.reason} </td>
                            <td> {appointment.technician.technician_name} </td>
                            <td><button className="btn btn-success" onClick={() => cancelAppointment(appointment.id)}>Finished</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
);

}