# CarCar

Team:

* Person 1 - Which microservice?
Nate Endicott - Auto Services Microservice
* Person 2 - Which microservice?
Ava Rinaldi - Auto Sales Microservice

## Design
On the homepage, there are three dropdowns of the three different category components of the project. Users can navigate through the dropdowns to access the Dealership Inventory, Services, and Sales.

Dealership Inventory
- Create a Manufacturer
- Manufacturer List
- Create a Car Model
- Car Model List
- Create a Vehicle
- Vehicle List

Services 
- Enter a Technician
- Create a Service Appointment
- Service Appointment List
- Service Appointment History

Sales
- Create a Sales Record
- Add a Salesperson
- Add a New Customer
- Car Sales List
- History of Car Sales



## Service microservice

For Services, you had to keep track of service appoints for automobiles and their customres. In doing so, you had to keep track of the VIN of the sepecifc vehicle in the inventory in order to filter for it for one of the microservices. 

## Sales microservice

The sales microservice keeps a record of inventory through automobile sales. Users can create sales records, add salespeople and customers, and also access a list of car sales as well as the history of car sales. The models include Salesperson, Customer, and Sales Record. It also includes an Automobile value object that contains data from the Inventory. I also created a poller that polls for data in the Inventory that will access that AutomobileVO.