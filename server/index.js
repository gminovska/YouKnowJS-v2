const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('client/build'));


app.get('/api/test', (req, res) => {
  res.json({ yo: 'yoyoyo' });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(process.env.PORT || 3001);
