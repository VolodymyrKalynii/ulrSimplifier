const express = require('express');
const shortid = require('shortid');
const cors = require('cors')
const app = express();

const urlDatabase = {};

app.use(express.json());
app.use(cors());    

app.post('/shorten', (req, res) => {
    const originalUrl = req.body.url;
    const shortUrlId = shortid.generate();

    urlDatabase[shortUrlId] = originalUrl;

    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortUrlId}` });
});

app.get('/:shortUrlId', (req, res) => {
    const shortUrlId = req.params.shortUrlId;
    const originalUrl = urlDatabase[shortUrlId];

    if (originalUrl) {
        res.redirect(`http://localhost:3000/${originalUrl}`);
    } else {
        res.status(404).json({ error: 'URL not found' });
    }
});

const PORT = process.env.PORT || 8124;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});