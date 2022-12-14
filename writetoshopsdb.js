const mongoose = require('mongoose');
const Onlineshop = require('./models/onlineshop');
const express = require('express');
const writetoshopsdb = express();

const dbURI = 'mongodb+srv://shoogdb:shoog123456@cluster0.cqarta9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//mongoose and mongo sandbox rout 
const shop1 = new Onlineshop({
        shop_name: 'Tafase Elalhala',
        website: 'https://tafaseelalhala.com/',
        logo: './img/tafaseelalhala.png',

    });
    shop1.save()

    const shop2 = new Onlineshop({
        shop_name: 'HQOL',
        website: 'https://hqolsa.com',
        logo: './img/Hqool.png',

    });
    shop2.save()

    const shop3 = new Onlineshop({
        shop_name: 'Banana',
        website: 'https://www.banana.sa/',
        logo: './img/banana.png',

    });
    shop3.save()

    const shop4 = new Onlineshop({
        shop_name: 'Abazeer',
        website: 'https://abazeer.com/',
        logo: './img/Abazeer.jpeg',

    });
    shop4.save()

    const shop5 = new Onlineshop({
        shop_name: 'Reemee Bakery',
        website: 'https://www.instagram.com/remeebakery/',
        logo: './img/ReemeeBakery.jpeg',

    });
    shop5.save()

    const shop6 = new Onlineshop({
        shop_name: 'Moltaqa Alkhabbazeen',
        website: 'https://www.moltaqa-alkhabbazeen.com/',
        logo: './img/MoltaqaAlkhabbazeen.jpeg',

    });
    shop6.save()


    const shop7 = new Onlineshop({
        shop_name: 'Mandarin',
        website: 'https://www.mandarin.sa/',
        logo: './img/mandarin.jpeg',

    });
    shop7.save()

    const shop8 = new Onlineshop({
        shop_name: 'Proland',
        website: 'https://proland.sa/',
        logo: './img/proland.png',

    });
    shop8.save()