const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = ('cookie-parser');
const users = require('./routes/user');
const cors = require('cors');

const PORT = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser);

app.use('/api/users', users);

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
