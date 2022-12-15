const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/product.route');
const { config } = require('dotenv');

config();

const app = express();

//connect database
mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.kngtf.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`)
  .then(console.log('database connected...'))
  .catch((err) => console.log(err));
app.use(express.json());

const port = 5000;

app.use('/api/v1', route);

app.listen(port, console.log(`server is listening on port: ${port}...`));