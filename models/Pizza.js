const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
  size: {
    type: String,
    default: 'Large'
  },
  //if you wanted to you could also specify 'Array' in place of array brackets
  toppings: [],
  //adding comments to pizza schema tells Mongoose to expect 
  // an ObjectId & that it's data comes from the Comment model 
  // ref basically tells Pizza model which documents to search to find the right comments
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
},
  //tell schema it can use virtuals
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//get total amount of comments & replies on retrieval (virtual) 
PizzaSchema.virtual('commentCount').get(function () {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
})

//create the pizza model
const Pizza = model('Pizza', PizzaSchema);

//export Pizza model
module.exports = Pizza;