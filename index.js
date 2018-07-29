const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();
const keys = require('./config/keys');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

require('./models/Note');
require('./routes')(app);

mongoose.connect(keys.mongoDB, {useNewUrlParser: true})
.then(() => {
    console.log('Successfully connected to Database');
})
.catch(err => {
    console.log('Unable to connect to database ')
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})