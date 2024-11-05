const express = require('express');
const bodyParser = require('body-parser');
const produtosRouter = require('./routes/produtos');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/produtos', produtosRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});