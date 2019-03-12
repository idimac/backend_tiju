import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

import config from './config';

const app = express();

app.listen(config.port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`server is listening on port ${config.port}`)
    }
})

app.post('/', (req, res) => {
    res.send('Nodemon works')
})

app.use(bodyParser.json());         //this middleware handles POST request bodies
app.use(session({                   //this middleware saves sessions information on server and coockies
    resave: true,
    saveUninitialized: true,
    secret: config.secret,
  }));
