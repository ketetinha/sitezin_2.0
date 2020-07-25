const mongoose = require("mongoose"),
      plm      = require("passport-local-mongoose"),
      userSchema = new mongoose.Schema({
          username: String,
          password: String,
          name: String,
          lastName: String,
        });

userSchema.plugin(plm); //Colocando o passport-local-mongoose no Schema

const user = mongoose.model("User", userSchema);
      
module.exports = user;