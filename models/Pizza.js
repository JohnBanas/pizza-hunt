const { Schema, model } = require('mongoose');

//create new pizza schema with mongoose
const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  //create default timestamp to current date and time if one is not provided
  // this will prevent creating timestamp elsewhere and sending that data
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  //if you wanted to you could also specify 'Array' in place of array brackets
  toppings: []
});

//create the pizza model
const Pizza = model('Pizza', PizzaSchema);

//export Pizza model
module.exports = Pizza;