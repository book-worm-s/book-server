// All Imports Here
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Setting up App Here
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));



// Import All Routers helper



// Use All Routers inorder Here.



module.exports = app;