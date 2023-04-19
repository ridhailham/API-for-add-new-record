
const EmployeeModel = require('../models/employee.model')


// get all employee
exports.getEmployeeList = (req, res) => {
    // console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employees) => {
        console.log('we are here');
        if(err)
        res.send(err)
        console.log('Employees', employees)
        res.send(employees)
    }) 
}

// get employee by ID
exports.getEmployeeByID = (req, res) => {
    // console.log('get emp by id');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if(err){
            res.send(err)
            console.log('single employee data', employee);
            res.send(employee)
        }
    })
}

// create new employee
exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body)
    console.log('employeeReqData', employeeReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, massage: 'please fill all fields'})
    } else {
        console.log('valid data');
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if(err)
            res.send(err)
            res.json({status: true, massage: 'Employee Created Successfully', data: employee.id})
            
        })
    }
}