const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

// parse request data content type form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse request data type json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

const employeeRoutes = require('./src/routes/employee.route')
app.use('/api/v1/employee', employeeRoutes)


app.listen(port, () => {
    console.log(`express server is running on port ${port}`)
})