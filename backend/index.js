const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express();
const PORT = 3000;


app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  }) 