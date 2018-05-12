const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const viewPath = process.env.NODE_ENV === 'production'
  ? path.join(__dirname, 'views/build')
  : path.join(__dirname, 'views');

app.set('views', viewPath);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Tony Schwartz',
  });
});

app.get('/projects', (req, res) => {
  res.render('pages/projects', {
    title: 'Tony Schwartz - Projects',
  });
});

app.listen( process.env.PORT, () => {
  console.log('HTTP server is listening on port ' + process.env.PORT); // eslint-disable-line
});
