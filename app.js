const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'html');
app.set('views', 'views')

const feedRoutes = require('./routes/feed');
const userModels = require('./models/user');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/feed', feedRoutes);
app.use('/user', userModels);

// app.use((req, res, next) => {
//     res.status(500).render('500', {
//         pageTitle: 'index',
//         path: '/'
//     })
// })
mongoose
    .connect('mongodb+srv://itvisionhubs:itvisionhub0001xpl@cluster01.kzbsplu.mongodb.net/errorhandling')
    .then(result => {
        app.listen(8080, console.log('Do your job right now!'));
    })
    .catch(err => console.log(err));
