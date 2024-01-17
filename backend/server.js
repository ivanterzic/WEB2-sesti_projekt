const express = require('express');
const cors = require('cors');
const app = express();
const cities = require('./city_population.json');



app.use(cors());

app.get('/cities', (req, res) => {
  const cities = require('./city_population.json');
  res.json(cities);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));