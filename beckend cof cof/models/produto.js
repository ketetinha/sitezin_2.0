const mongoose = require("mongoose"),
      prodSchema = new mongoose.Schema({
          title: String,
          price: Number,
          description: String,
      }),
     prod = mongoose.model("Product", prodSchema);

module.exports = prod;