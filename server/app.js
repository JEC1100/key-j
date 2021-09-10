const express = require('express'),
app = express();

require('dotenv').config();

app.use('/api/', require('./routes/root'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`
  console.log(`Listening on ${url}`)
})
