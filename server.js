import express from 'express';
import session from 'express-session';

import config from './config';

const app = express();

app.listen(config.port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`server is listening on port ${config.port}`)
    }
})
