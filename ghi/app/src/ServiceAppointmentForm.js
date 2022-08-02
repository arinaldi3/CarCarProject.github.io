import React from 'react';

class ServiceAppointmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            vin: '',
            customer_name: '',
            date: '',
            time:'',
            reason:'',
            technicans: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        const url = 'http://localhost:8080/api/technicians/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json();
            this.setState({technicians:data.technicians});
        }
    }

    handleChange(event){
        const value = event.target.value
        const key = event.target.name;
        const changeDict = {}
        changeDict[key] = value
        this.setState(changeDict)
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;

        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok){
            const newAppointment = await response.json();
            console.log(newAppointment)
            this.setState({
                vin:'',
                customer_name: '',
                date: '',
                time:'',
                reason:'',
                technican: '',
            });
        }
    }


    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Make a service appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-service-appointment-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="name">Vin</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.customer_name}placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                    <label htmlFor="starts">Customer Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.date} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                    <label htmlFor="ends">Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.time} placeholder="Time" required type="text" name="time" id="time" className="form-control" />
                    <label htmlFor="max_attendees">Time</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChange} value = {this.state.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                    <label htmlFor="max_attendees">Reason</label>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleChange} value = {this.state.technican} required name="technician" id="technician" className="form-select">
                    <option value="">Choose a technician</option>
                    {this.state.technicians.map(technician => {
                        return (
                        <option key={technician.id} value={technician.id}>{technician.technician_name}</option>
                        )
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Create appointment</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
    }

    export default ServiceAppointmentForm;