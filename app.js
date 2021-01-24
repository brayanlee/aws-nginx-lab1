const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res . send ( 'Welcome to AWS nginx web-server project!' ) ;
} ) ;

app.listen(3000, () => {
  console.log('AWS nginx web-serverv app listening on port 3000!');
} ) ;

app.get('/health', (req, res) => {
  res.status(200).send();
} ) ;
