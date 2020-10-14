import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import apiRoutes from './api'


const app = express();
const port = process.env.PORT || 5000;

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.use(express.static('../client/dist'));
app.get('*', function(req, res) {
    res.sendFile(path.resolve('../client/dist/index.html'));
});


export {
    app,
    port,
};
