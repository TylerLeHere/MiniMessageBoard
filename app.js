// This is the heart of the server as it wires everything together.

const express = require('express'); // This imports express library
const app = express(); // This creates an instance of express, main web app where you define routes, middleware and settings

app.set('view engine', 'ejs'); // This sets the view engine to EJS, which allows you to render dynamic HTML pages using EJS templates

app.use(express.urlencoded({ extended: true }));

// Connect routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter); // This tells the app to use the indexRouter for all routes starting with '/'

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
