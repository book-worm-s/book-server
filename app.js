// All Imports Here
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

// Setting up App Here
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


// Import All Routers helper


// Use All Routers inorder He


module.exports = app;
