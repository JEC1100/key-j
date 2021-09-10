const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

app.use('/api/', require('./routes/root'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`Listening on ${url}`);
});
