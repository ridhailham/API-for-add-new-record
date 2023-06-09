var dbConn = require('../../config/db.config')

var Employee = function(employee) {
    this.first_name = employee.first_name
    this.last_name = employee.last_name
    this.email = employee.email
    this.phone = employee.phone
    this.organization = employee.organization
    this.designation = employee.designation
    this.salary = employee.salary
    this.status = employee.status ? employee.status : 1
    this.created_at = new Date()
    this.updated_at = new Date()
}

// get all employees list from DB
Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employees', (err, res) => {
        if(err) {
            console.log('Error while employees', err)
            result(null, err)
        } else {
            console.log('Employees fetch successfully');
            result(null, res)
        }
    })
}

// get employee by ID from DB
Employee.getEmployeeByID = (id, result) => {
    dbConn.query('SELECT * FROM employees WHERE id = ?', id, (err, res) => {
        if(err) {
            console.log('Error while fetching employee by id', err)
            result(null, err)
        }else{
            result(null, res)
        }
    })
}

// create new employee
Employee.createEmployee = function(employeeReqData, result) {
    dbConn.query('INSERT INTO employees SET ?', employeeReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting data');
            result(null, err)
        } else {
            console.log('Employee created successfully')
            result(null, res)
        }
    })
}

module.exports = Employee