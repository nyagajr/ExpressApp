const express = require('express')
const app = express()

const users = [
  { id: 1, name:'user1' },
  { id: 2, name:'user2' },
  { id: 3, name:'user3' },
  { id: 4, name:'user4' },
  { id: 5, name:'user5' },
  { id: 6, name:'user6' },
];

app.get('/', (req, res) => {
  res.send('Welcome to my Api app');
});

//getting all the users
app.get('/api/users', (req, res) => {
  res.send(users);
  });

//Getting a single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if(!user) res.status(404).send('User not found');
  res.send(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
