const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require("./models");
const user = require("./app.controller");
const item = require("./app.controller");

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

app.post("/user", user.create)
app.put("/user/:id", user.setProfile)
app.get("/user/:id", user.getProfile)
app.post("/user/login", user.login)
app.get("/item/:id", item.getItem)
app.post("/item", item.addItem)
app.put("/item/:id", item.updateItem)

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});