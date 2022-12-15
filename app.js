



const { render } = require('ejs');
const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');



const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { requireAuth , checkUser, requireAdminAuth } = require('./middleware/authMiddleware');
const { upload } = require('./middleware/upload');
const Place = require('./models/place');
const User = require('./models/user');
const placeRoutes = require('./routes/placeRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const cityRoutes = require('./routes/cityRoutes');
const onlineshopRoutes = require('./routes/onlineshopRoutes');
const authRoutes = require('./routes/authRoutes');

//express app
const app = express();


mongoose.set('strictQuery', true);
//connnect to manngodb

require('dotenv').config();

    app.listen(process.env.PORT);

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
 
//view engine
app.set('view engine', 'ejs');


//middleware and static files
app.use(express.static('public'));
app.use('/uploads',express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
//app.use(upload);

//testing to make multer work
app.use(bodyParser.urlencoded({extended:true}))

//routs
app.get('*', checkUser);
app.get('/', (req,res) => {
    res.render('index', {title : 'Home'});
});

app.get('/index', requireAuth, (req,res) => {
    res.render('index', {title : 'Home'});
});

app.get('/about' , (req,res) => {
    res.render('about', {title : 'About'});
}); 

//other routes
app.use(placeRoutes);
app.use(authRoutes);
app.use(recipeRoutes);
app.use(onlineshopRoutes);
app.use(cityRoutes);

//for undefined routes
app.use((req, res) => {
    res.status(404).render('404',{ title: 'Error', root: __dirname});
})



