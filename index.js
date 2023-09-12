const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json('Hello World!');
  });

  app.get('/', (req, res) => {
    res.json(["user1", "user2", "user3"]);
  });

  app.post('/user', (req, res) => {
    res.json("юзер добавлен");
  });

  app.delete('/user', (req, res) => {
    res.json("не хватает прав доступа");
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  