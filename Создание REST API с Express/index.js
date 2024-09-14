const express = require('express');
const Joi = require('joi');
const fs = require('fs');
const app = express();
const filePath = 'users.json';

app.use(express.json());

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(1).required()
});

function readUsersFromFile() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

function writeUsersToFile(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
}

app.get('/users', (req, res) => {
  const users = readUsersFromFile();
  res.send({ users });
});

app.get('/users/:id', (req, res) => {
  const users = readUsersFromFile();
  const user = users.find(user => user.id === +req.params.id);
  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }
  res.send(user);
});


app.post('/users', (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }

  const users = readUsersFromFile();
  const newUser = { id: users.length ? users[users.length - 1].id + 1 : 1, ...req.body };
  users.push(newUser);
  writeUsersToFile(users);

  res.send(newUser);
});


app.put('/users/:id', (req, res) => {
  const users = readUsersFromFile();
  const user = users.find(user => user.id === +req.params.id);
  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }

  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }

  const updatedUser = { ...user, ...req.body };
  const index = users.indexOf(user);
  users.splice(index, 1, updatedUser);
  writeUsersToFile(users);

  res.send(updatedUser);
});


app.delete('/users/:id', (req, res) => {
  const users = readUsersFromFile();
  const user = users.find(user => user.id === +req.params.id);
  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }

  const index = users.indexOf(user);
  users.splice(index, 1);
  writeUsersToFile(users);

  res.send(user);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
