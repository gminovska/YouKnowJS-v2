const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const User = require('./models/user');

const app = express();
app.use(express.static('client/build'));

mongoose.connect(process.env.YKJS_2_DB);

app.get('/api/test', async (req, res) => {
  await User.create({ username: 'Snoopy' });
  const data = await User.findOne({});

  res.json(data);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(process.env.PORT || 3001);
