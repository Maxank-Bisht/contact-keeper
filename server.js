const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//connect to Db
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// Serve static assests in production
if (process.env.NODE_ENV === 'production') {
	//set the static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
