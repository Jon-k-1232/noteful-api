require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const app = express();



const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';



app.use(morgan(morganOption));
app.use(helmet());
app.use(express.json());


const allowedOrigins = ['http://localhost:3000', 'http://noteful-frontend-url']; //     update url once launched
app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The cors policy for this api does not allow access from the origin.';
            return callback(new Error(msg), false);
        }
        return callback(null,true);
    }
}));




/* ///////////////////////////\\\\  ENDPOINTS  ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

app.use(errorHandler);



/*
app.get('/', (req, res) => {
    res.send('Hello, world!')
    });
*/



/* ///////////////////////////\\\\  ERROR HANDLER  ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

function errorHandler(error, req, res, next) {
    let response;
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error);
        response = { message: error.message, error }
        }
    res.status(500).json(response)
}




module.exports = app;