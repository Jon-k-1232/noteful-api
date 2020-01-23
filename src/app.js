require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const app = express();
const notesRouter = require('./notes/notes-router.js');
const foldersRouter = require('./folders/folders-router.js');


const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';


//middleware
app.use(morgan(morganOption));
app.use(helmet());
app.use(express.json());
app.use(cors());




/* ///////////////////////////\\\\  ENDPOINTS  ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/


app.use('/api/folder', foldersRouter);
app.use('/api/note', notesRouter);
app.use(errorHandler);


//test connection
app.get('/api/test', (req, res, next) => {
    res.send('Hello, world!')
});




/* ///////////////////////////\\\\  ERROR HANDLER  ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function errorHandler(error, req, res, next) {
    let response;
    if (NODE_ENV === 'production') {
        response = { error: 'server error' }
    } else {
        console.error(error);
        response = { message: error.message, error }
        }
    res.status(500).json(response)
}



module.exports = app;