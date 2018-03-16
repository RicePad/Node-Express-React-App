const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

//Heroku configuration for production enviroment
const PORT = process.env.PORT || 5000;

app.listen(PORT);
