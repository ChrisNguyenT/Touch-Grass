
//this file was completely broken, will redo after server is up and running
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//this schema is extremely basic for now, will completely redo it when 
//server is up and running
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },

  }
);

const User = model('User', userSchema);

module.exports = User;