// server.js (or equivalent backend file)
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/special', (req, res) => {
    res.json({ message: 'This is a special message from uday ! , Hello Sandeep ' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
