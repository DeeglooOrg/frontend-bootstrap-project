const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'application/dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'application/dist', 'index.html'));
});

app.listen(port, () => console.log(`\n Application is running on http://localhost:${port}`));
