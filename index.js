// All Imports should be here
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4000 ;

const server = app.listen(PORT , () => {
    console.log('Server At PORT : ' + PORT);
});

