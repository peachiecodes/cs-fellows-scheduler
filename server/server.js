const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.get('/', (req, res) => {
  res.status(200).send('Get request to route "/" is working!')
})

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`!!!!!!***** Now listening on port ${port}...`)
})