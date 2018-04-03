const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');


mongoose.connect(keys.mongooseURL);

const app = express();

require('./routes/authRoutes')(app);


//Heroku configuration for production enviroment
	
	const PORT = process.env.PORT || 5000;

	app.listen(PORT);
