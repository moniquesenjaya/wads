const Users = user.getUser();
const Items = items.getItems();
const items = require("../models/items.model");
const user = require("../models/user.model");

// create user
exports.create = async (req, res) => {
    console.log("create sign up")
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Fill Schema and Save in DB
    const user = Users({
      email: req.body.email,
      firstName: req.body.fname,
      lastName: req.body.lname,
      password: req.body.password
    });
  
    user.save(user)
      .then(data => {
        res.send(token);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

//   updating profile
  exports.setProfile = async (req, res) => {
    console.log("set profile")
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = { id: req.params.id };
    const update = {
        email: req.body.email,
        firstName: req.body.fname,
        lastName: req.body.lname,
    };
  
    try {
      const success = await Users.findOneAndUpdate(id, update)
      console.log("Successfully Updated" + success);
      res.status(200).send({
        message: "Successfully Updated" + success
      })
    }
    catch (err) {
      return res.status(400).send({
        message: "Id not found"
      })
    }
  };
  //   getting profile
  exports.getProfile = (req, res) => {
    console.log("get profile\n\n")
  
    const response = {
      profile: Users.findOne({ email: req.params.id }, (err, profile) => {
        if (err) res.status(400).send({ message: "Error Finding User" })
        res.status(200).send(profile)
  
      })
    }
    const test = response.profile
    // res.status(200).send(response.profile)
  };


  exports.login = async (req, res) => {
    // Error Handle the Request
    if (!req.body) {
      return res.status(400).send({
        message: "Data to login can not be empty!"
      });
    }
  
  
    try {
      // Destructure the email and password
      const { email, password } = req.body;
      const dbPassword= await Users.findOne({ email: email }, (err, user) => {
        return user.password;
      }).clone().exec();
      
      if (password == dbPassword.password) {
        res.send(user);
        console.log("logged in")
      }
    }
    catch (error) {
      console.log(error)
    }
    res.send("failed")
  };

// create items
exports.addItem = async (req, res) => {
    console.log("create item")
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Fill Schema and Save in DB
    const item = Items({
      itemName: req.body.itemName,
      price: req.body.price,
      desc: req.body.desc,
      image: req.body.image
    });
  
    user.save(user)
      .then(data => {
        res.send(item);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };
  //   updating Item
  exports.updateItem = async (req, res) => {
    console.log("update item")
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = { id: req.params.id };
    const update = {
        itemName: req.body.itemName,
    };
  
    try {
      const success = await Users.findOneAndUpdate(id, update)
      console.log("Successfully Updated" + success);
      res.status(200).send({
        message: "Successfully Updated" + success
      })
    }
    catch (err) {
      return res.status(400).send({
        message: "Id not found"
      })
    }
  };
  //   getting Item
  exports.getItem = (req, res) => {
    console.log("get Item\n\n")
  
    const response = {
      profile: Users.findOne({ email: req.params.id }, (err, profile) => {
        if (err) res.status(400).send({ message: "Error Finding Item" })
        res.status(200).send(profile)
  
      })
    }
    const test = response.profile
    // res.status(200).send(response.profile)
  };
