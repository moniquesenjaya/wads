const mongoose = require("mongoose")
const getItem = () => {
  const Item = mongoose.model(
    "item",
    mongoose.Schema(
      {
        itemName: String,
        desc: String,
        image: String,
        price: Number
      },
      { timestamps: true }
    )
  );
  return Item;
};

exports.getItem = getItem