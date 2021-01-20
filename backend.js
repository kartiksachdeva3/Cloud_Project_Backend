const express = require('express');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/Cloud_project', {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/fields', require('./routes/fields.js'))
app.use('/api/sensors', require('./routes/sensors.js'))

app.listen(3001, console.log('app listening'));