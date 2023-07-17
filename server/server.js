import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './config/db.js';
import router from './routes/user.js';

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // conceal info about stack


// HTTP request
app.get('/api/', (req, res) => {
  res.status(201).json({ message: 'Home get Request'});
});

// routes
app.use('/api', router);

const PORT = 8080;
const HOST = 'http//localhost';

// start server only when there is a valid connection
connect().then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`server listening on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.log('can not connect to the server');
  }
}).catch(error => { console.log('invalid database connection')});
