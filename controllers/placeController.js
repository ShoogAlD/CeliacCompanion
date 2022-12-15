const Place = require('../models/place');
const City = require('../models/city');


// place_index
module.exports.place_index = (req, res) => {
    City.find()
   .then((val) => 
   Place.find() 
   .then((result) => {
       res.render('places/index',{title : 'All places', places:result, cities : val})
   }))
   .catch((err) => {
       console.log(err);
   })

}

// place_index for one city
module.exports.place_by_city_get = (req, res) => {
    const city = req.params.city;
    City.find()
    .then((val) =>
    Place.find({city: city}) 
   .then((result) => {
       res.render('places/bycity' ,{title : 'places by city', places:result, cities : val , city: city})
   }))
   .catch((err) => {
       console.log(err);
   })

}


// place_details
module.exports.place_details = (req,res)=> {
    const id = req.params.id;
    Place.findById(id)
        .then(result => {
            res.render('places/details', {place: result, title: 'Place Details'});
        })
        .catch((err) => {
            res.status(404).render('404', {title: 'Place not found'}); 
        });
}


// place_create_get
module.exports.place_create_get = (req, res) => {
    City.find() 
    .then((result) => {
        res.render('places/create',{title : 'Add a new place', cities:result})
    })
    .catch((err) => {
        console.log(err);
    })
    //res.render('places/create' , {title : 'Add a new place'});

}


// place_create_post
module.exports.place_create_post = (req, res) => {
    const place = new Place(req.body);
    if(req.file) {
        place.logo = req.file.path
      } else {
        place.logo = 'img/GF_logo.png'
      }
    place.save()
    .then((result) => {
        res.redirect('/places');
    })
    .catch((err) => {
        console.log(err);
    });

}


// place_delete
module.exports.place_delete = (req, res) => {
    const id = req.params.id;
    Place.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/places'});
        })
        .catch((err) => {
            console.log(err);
        });
}
