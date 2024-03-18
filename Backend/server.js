const express = require('express');
const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route 
app.get('/', (req, res) => {
  res.send('Hello World!says welcome Expressjs');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});