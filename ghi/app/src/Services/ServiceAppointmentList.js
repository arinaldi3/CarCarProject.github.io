import React, { useState, useEffect } from 'react'


function ServiceAppointmentList() {

    const [appointments,setAppointments] = useState([])
    
    const fetchAppointments = async () => {
        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const response = await fetch(appointmentUrl)
        const {appointments} = await response.json();
        console.log(appointments)
        setAppointments(appointments)
    }
    useEffect(() => {
        fetchAppointments()
    }, []);
    
    const cancelAppointment = async (id) => {
        const cancelUrl = `http://localhost:8080/api/appointments/${id}/`
        const fetchConfig = {
            method: "delete"
        }
        const cancelResponse = await fetch(cancelUrl, fetchConfig)
        if (cancelResponse.ok){
            let updatedAppointments = [];
            updatedAppointments = appointments.filter(appointment => appointment.id !== id)
            setAppointments(updatedAppointments);
        }
    }

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
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td> {appointment.vin} </td>
                                <td> {appointment.customer_name} </td>
                                <td> {new Date(appointment.date).toLocaleDateString()} </td>
                                <td> {new Date(appointment.date).toLocaleTimeString('en-US')} </td>
                                <td> {appointment.reason} </td>
                                <td> {appointment.technician.technician_name} </td>
                                <td><button className="btn btn-danger" onClick={() => cancelAppointment(appointment.id)}>Cancel</button></td>
                                <td><button className="btn btn-success" onClick={() => cancelAppointment(appointment.id)}>Finished</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

export default ServiceAppointmentList;