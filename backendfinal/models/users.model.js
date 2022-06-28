const mongoose = require("mongoose")
const getUser = () => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        email: String,
        password: {type: String, required: true, maxLength: 255},
        firstName: String,
        lastName: String,
      },
      { timestamps: true }
    )
  );
  return User;
};

exports.getUser = getUser