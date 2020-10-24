const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoute = require('./routes/usersRoute');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.post('/signup', usersRoute);

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(
    'mongodb+srv://amy:amy@cluster0-ee6d2.mongodb.net/human_resource_management_system?retryWrites=true&w=majority'
  )
  .then(result => {
    console.log("mongoose connect successfully.");
    app.listen(PORT);
  })
  .catch(err => console.log(err));
