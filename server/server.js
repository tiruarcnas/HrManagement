const { request } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const Registeruser = require('../server/model');
const cors = require('cors');
mongoose
  .connect(
    'mongodb+srv://sarath:sarath@nodeapi.cuwho.mongodb.net/hrm?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB is connect...'));

app.use(express.json());

app.use(cors({ origin: '*' }));

app.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    let exist = await Registeruser.findOne({ email: email });
    if (exist) {
      return res.status(400).send('user Already Exist');
    }
    let newUser = new Registeruser({
      firstname,
      lastname,
      email,
      password,
    });

    await newUser.save();
    res.status(200).send('registerd successfully');
  } catch (err) {
    console.log(err);
    return res.status(500).send('Internel Server Error');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    let exist = await Registeruser.findOne({ email });
    if (!exist) {
      return res.status(400).send('User Not Found');
    }
    if (exist.password !== password) {
      return res.status(400).send('Invalid crdentials');
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Server Error');
  }
});

app.get('/dashbord', middleware, async (req, res) => {
  try {
    let exist = await Registeruser.findById(req.user.id);
    if (!exist) {
      return res.status(400).send('User Not Found');
    } else {
      return res.status(200).send(exist);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send('Server Error');
  }
});

app.listen(5000, () => {
  console.log('server is running..');
});
