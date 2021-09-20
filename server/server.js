/*const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});*/


const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

/**** Configuration ****/
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console
app.use(express.static('../client/build')); // Needed for serving production build of React

/**** Database ****/
const artwalkDB = require('./db/conn')(mongoose);


/**** Start ****/
const url = process.env.MONGO_URL || 'mongodb://localhost/conn';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async () => {
        await artwalkDB.bootstrap(); // Fill in test data if needed.
        await app.listen(port); // Start the API
        console.log(`Artwalk API running on port ${port}!`);
    })
    .catch(error => console.error(error));
