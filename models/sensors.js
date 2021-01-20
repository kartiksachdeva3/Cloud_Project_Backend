const mongoose = require('mongoose');

const sensorSchema = mongoose.Schema({
  Sensor_ID: {
    type: String
  },
  Users: {
    type: Array
  },
  level_1: {
    type: Number
  },
  level_2: {
    type: Number
  },
  level_3: {
    type: Number
  },
  level_4: {
    type: Number
  },
  Battery_percentage: {
    type: Number
  },
  Callibration_status: {
    type: String
  }
})

var Sensors = mongoose.model('Sensor', sensorSchema);

module.exports = Sensors;