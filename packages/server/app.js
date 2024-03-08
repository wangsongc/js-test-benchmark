const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/sync/benchmark/getDelayedMessage', (req, res) => {
  const { delay } = req.body;
  setTimeout(() => {
    res.send(`Delay return time: ${delay} ms! ${index}`);
  }, delay);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
