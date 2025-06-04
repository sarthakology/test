const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes');


app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
