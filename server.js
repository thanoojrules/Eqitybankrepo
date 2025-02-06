const express = require('express');
const app = express();

const PORT = 3900;

app.get('/', (req, res) => {
    res.send('Hello, Node.js server is running!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
