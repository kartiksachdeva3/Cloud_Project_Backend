const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema({
  Field_ID: {
    type: String
  },
  Users: {
    type: Array
  },
  Sensors: {
    type: Array
  },
  temperature: {
    type: Number
  },
  humidity: {
    type: Number
  },
  gas: {
    type: Number
  }
})

var Fields = mongoose.model('Field', fieldSchema);

module.exports = Fields;
