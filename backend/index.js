const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const trains = require('./routes/trains');
const users = require('./routes/users');
const auth = require('./routes/auth');
const errorHandler = require('./middleware/error');
const booking = require('./routes/booking');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });
const app = express();

app.use(cors());

//connect to database
connectDb();
//Body parser
app.use(express.json());

const PORT = process.env.PORT || 8000;

//Mount Routes
app.use('/api/v1/trains', trains);
app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);
app.use('/api/v1/booking', booking);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
