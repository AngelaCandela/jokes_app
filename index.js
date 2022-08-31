require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const jokes = require('./api/routes/jokesRoutes');
app.use('/jokes', jokes);
