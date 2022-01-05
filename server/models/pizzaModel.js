const mongoose = require("mongoose");

/* Data Schema */
const pizzaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    variants: [],
    prices: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Created a data model using the model() method
const pizzaModel = mongoose.model("pizzas", pizzaSchema);
module.exports = pizzaModel;
