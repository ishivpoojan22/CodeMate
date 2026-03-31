const express = require('express');
const app = express();

app.use("/", (req, res) => {
  res.send("this is from dashboard route ");
});

app.use("/test", (req, res) => {
  res.send("this is from test route ");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});