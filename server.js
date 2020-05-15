import logger from "./middleware/logger"
const experss = require('express');
const path =require('path');
import membersApi from './routes/api/members'
require('dotenv/config')

const app = experss();


const {NODE_ENV, PORT, HOST, TOKEN } = process.env;  //// process.env is NODE_MODULE object
console.log(
    NODE_ENV, PORT, HOST, TOKEN
);

// check env variable first
//const PORT = process.env.PORT || 5000;

// middleware

// initialize logger
app.use(logger);

// app.get('/', (req, res) => {
//     //res.send('Hi!')
//     res.sendfile(path.join(__dirname, 'public', 'index.html'));
// });
// set a static folder https://blog.stackpath.com/static-content/
app.use(experss.static(path.join(__dirname, 'public')));

// init body parser middleware
app.use(experss.json()); // handle request body data
app.use(experss.urlencoded({extended: false})); // handle url encoded data

// routes

// see routes/api.members.js
// // get all members
// app.get('/api/members', (req, res) => {
//     // return json format
//     res.json(members)
// });
//
// // get all individual member (url parameter)
// app.get('/api/members/:id', (req, res) => {
//     // return json format
//     //res.send(req.param.id)
//     console.log(req.params.id)
//     res.json(members.filter(member =>
//         member.id === req.params.id
//     ));
// });

// api members route
app.use('/api/members', membersApi);

app.listen(PORT, ()=>{console.log(`server started on ${PORT}`)});

