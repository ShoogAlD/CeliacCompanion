const mongoose = require('mongoose');
const Place = require('./models/place');

const dbURI = 'mongodb+srv://shoogdb:shoog123456@cluster0.cqarta9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//mongoose and mongo sandbox rout 
app.get('/add-place',(req,res) => {
    const place = new Place({
        name_en: 'tafaseelalhala',
        name_ar: 'تفاصيل الحلا',
        phone: '0546466543' ,
        email: 'tafaseelalhala@gmail.com',
        website: 'https://tafaseelalhala.com/',
        logo: './img/tafaseelalhala.png'
    });
    place.save()
    .then((result)=> {
        res.send(result)
    }) 
    .catch((err) => {
        console.log(err);
    });
})

app.get('/all-places' , (req, res) => {
    Place.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/single-place', (req, res) => {
    Place.findById('6394d83f2dfb5887afa705a0')
    .then((result)=> {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})