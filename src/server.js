

const app = require('./app.js');
const { PORT, DB_URL, NODE_ENV } = require('./config.js');
const  knex = require('knex');



const db = knex({
    client: 'pg',
    connection: DB_URL
});

app.set('db', db);


app.listen(PORT, () => {
    if (NODE_ENV !== 'production') {
        console.log(`Server listening at http://localhost:${PORT}`)
    }
});