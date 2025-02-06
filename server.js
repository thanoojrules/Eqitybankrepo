const express = require('express');
const path = require('path'); // ✅ Add this line

const app = express();
const PORT = 8080;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'js')));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
