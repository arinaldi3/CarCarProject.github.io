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