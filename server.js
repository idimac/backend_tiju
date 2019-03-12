import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import configureRouter from './controllers';
import morgan from 'morgan';

import config from './config';

const app = express();

app.listen(config.port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`server is listening on port ${config.port}`)
    }
})


app.use(bodyParser.json());         //this middleware handles POST request bodies
app.use(morgan('tiny'));// combined // to simplify output in console
app.use(session({                   //this middleware saves sessions information on server and coockies
    resave: true,
    saveUninitialized: true,
    secret: config.secret,
  }));
app.use('/', configureRouter());
