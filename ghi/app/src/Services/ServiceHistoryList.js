import React, { useEffect, useState } from 'react';

function ServiceAppointmentHistory() {

    const [search, setSearch] = useState ('')
    const [input, setInput] = useState('')
    const [appointments, setAppointments] = useState ([])

    const fetchAppointments = async () => {
        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const response = await fetch(appointmentUrl)
        const appointmentData = await response.json();
        setAppointments(appointmentData.appointments)
    }
    useEffect(() => {
        fetchAppointments()
    }, []);

return (
    <>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search VIN" onChange = {(e) => setInput(e.target.value)} aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={(e) => {e.preventDefault(); setSearch(input)}}>Search VIN</button>
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
                    if (appointment.vin.includes(search)){
                    return (
                        <tr key={appointment.id}>
                            <td> {appointment.vin} </td>
                            <td> {appointment.customer_name} </td>
                            <td> {new Date(appointment.date).toLocaleDateString()} </td>
                            <td> {new Date(appointment.date).toLocaleTimeString('en-US')} </td>
                            <td> {appointment.reason} </td>
                            <td> {appointment.technician.technician_name} </td>
                        </tr>
                    );
                    }
                })}
            </tbody>
        </table>
        </>
    );
 }
export default ServiceAppointmentHistory;