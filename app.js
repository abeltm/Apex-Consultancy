//Student name: Abel Teklemariam | Student number: 301224352
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming request bodies as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Use the "views" directory to store views
app.set('views', path.join(__dirname, 'views'));

// Define the routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/country-list', (req, res) => {
  res.render('country-list');
});

app.get('/form-download', (req, res) => {
  res.render('form-download');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server on the port specified in the `PORT` environment variable, or on port 3000 if it is not set
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
