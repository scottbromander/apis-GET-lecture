const express = require('express');
const app = express();

const primeStaff = ['Scott', 'Rachael', 'Myron'];

app.use(express.static('server/public'));

app.get('/meow', (req, res) => {
  res.send('Meow!');
});

app.get('/staff', (req, res) => {
  res.send(primeStaff);
});

app.listen(5001, () => {
  console.log('Server up and running! Meow!');
});
