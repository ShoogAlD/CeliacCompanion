const mongoose = require('mongoose');
const Place = require('./models/place');
const express = require('express');
const writetoplacesdb = express();

const dbURI = 'mongodb+srv://shoogdb:shoog123456@cluster0.cqarta9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//mongoose and mongo sandbox rout 
const place1 = new Place({
        name_en: 'tafaseelalhala',
        name_ar: 'تفاصيل الحلا',
        city: 'Riyadh',
        phone: '0546466543' ,
        email: 'tafaseelalhala@gmail.com',
        website: 'https://tafaseelalhala.com/',
        snapchat: 'https://www.snapchat.com/add/talhala9',
        twitter: 'https://twitter.com/talhala9',
        instgram : 'https://www.instagram.com/talhala9',
        logo: './img/tafaseelalhala.png',
        location: 'https://goo.gl/maps/GHQmbBTdMmCCNjkH8'
    });
    place1.save()


const place2 = new Place({
        name_en: 'LAVASH',
        name_ar: 'لافاش',
        city: 'Riyadh',
        phone: '920023506' ,
        email: '',
        website: '',
        snapchat: '',
        twitter: '',
        instgram : 'https://www.instagram.com/eat_lavash/?hl=en',
        logo: './img/lavash.png',
        location: 'https://goo.gl/maps/A32VDTerKMGQxAip8'
    });
    place2.save()

    const place3 = new Place({
        name_en: 'Bakemate',
        name_ar: 'بيكميت',
        city: 'Riyadh',
        phone: '0126447486' ,
        email: '',
        website: '',
        snapchat: '',
        twitter: '',
        instgram : 'https://www.instagram.com/p/Bf3ax0EB8LS/',
        logo: './img/Bakemate.jpeg',
        location: 'https://goo.gl/maps/e319d6dAzkCGNFKN8'
    });
    place3.save()


    const place4 = new Place({
        name_en: 'Abazeer',
        name_ar: 'ابازير',
        city: 'Riyadh',
        phone: '920033971' ,
        email: 'cs@abazeer.com',
        website: 'https://abazeer.com/',
        snapchat: '',
        switter: 'https://twitter.com/abazeer_',
        instgram : 'https://www.instagram.com/abazeer',
        logo: './img/Abazeer.jpeg',
        location: 'https://goo.gl/maps/rDgKJL212Vc5CmjM6'
    });
    place4.save()


    const place5 = new Place({
        name_en: 'Qaf',
        name_ar: 'قاف',
        city: 'Riyadh',
        phone: '0553241363' ,
        email: '',
        website: 'http://www.qaf.sa/',
        snapchat: '',
        twitter: 'https://twitter.com/qaf__sa',
        instgram : '',
        logo: './img/Qaf.jpeg',
        location: 'https://goo.gl/maps/t8SEiGCEibsf4efdA'
    });
       place5.save()

       

    const place6 = new Place({
        name_en: 'Gluten Free Bakery',
        name_ar: 'خبزي الخالي',
        city: 'Riyadh',
        phone: '0112322666' ,
        email: '',
        website: '',
        snapchat: '',
        twitter: '',
        instgram : '',
        logo: './img/GlutenFreeBakery.jpeg',
        location: 'https://goo.gl/maps/3bQrpAATaojJTUrH7'
    });
    place6.save()


    const place7 = new Place({
        name_en: 'Healthy and Free',
        name_ar: 'صحي و خالي',
        city: 'Riyadh',
        phone: '0114458555' ,
        email: '',
        website: 'http://www.healthandfree.com/',
        snapchat: '',
        twitter: 'https://mobile.twitter.com/healthyanfree',
        instgram : '',
        logo: './img/healthyandfree.jpeg',
        location: 'https://goo.gl/maps/npmPTGggWgmNb2Eg8'
    });
    place7.save()

    const place8 = new Place({
        name_en: 'Special Loaf Bakery',
        name_ar: 'مخابز الرغيف الخاص',
        city: 'Riyadh',
        phone: '0114032372' ,
        email: '',
        website: '',
        snapchat: '',
        twitter: '',
        instgram : 'https://www.instagram.com/specialloaf/?hl=en',
        logo: './img/specialloaf.jpeg',
        location: 'https://goo.gl/maps/QnWjbRgcbJx5BCkw6'
    });
    place8.save()

    const place9 = new Place({
        name_en: 'Moltaqa Alkhabbazeen',
        name_ar: 'ملتقى الخبازين',
        city: 'Madenah',
        phone: '920010894' ,
        email: 'customer.service@moltaqa-alkhabbazeen.com',
        website: 'https://www.moltaqa-alkhabbazeen.com/',
        snapchat: '',
        twitter: '',
        instgram : '',
        logo: './img/MoltaqaAlkhabbazeen.jpeg',
        location: 'https://goo.gl/maps/r5ZEYWdPRmuCkp4s9'
    });
    place9.save()


    const place10 = new Place({
        name_en: 'TSC Signature',
        name_ar: 'تي اس سي سقنتشر',
        city: 'Riyadh',
        phone: '0536998833' ,
        email: '',
        website: 'http://tscsignature.com/',
        snapchat: '',
        twitter: 'https://mobile.twitter.com/tsc_signature',
        instgram : '',
        logo: './img/TSCSignature.jpeg',
        location: 'https://goo.gl/maps/b9kPQvKn6R6zXsqW9'
    });
    place10.save()

    
// app.get('/add-user',(req,res) => {
//     const user = new User({
//         username: 'testuser1',
//         email: 'test@user.com',
//         password: 'abc123' ,
//         IsAdmin: false
//     });
//     user.save()
//     .then((result)=> {
//         res.send(result)
//     }) 
//     .catch((err) => {
//         console.log(err);
//     });
// })
