const City = require('../models/city');



module.exports.city_index = (req, res) => {
  City.find().sort({ city_name: -1 })
    .then(result => {
      res.render('cities/index', { cities: result, title: 'All saved cities' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.city_details = (req, res) => {
  const id = req.params.id;
  City.findById(id)
    .then(result => {
      res.render('cities/details', { city: result, title: 'city details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'city not found' });
    });
}

module.exports.city_create_get = (req, res) => {
  res.render('cities/create', { title: 'Add a new city' });
}

module.exports.city_create_post = (req, res) => {
  const city = new City(req.body);
 
  city.save()
    .then(result => {
      res.redirect('/cities');
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.city_delete = (req, res) => {
  const id = req.params.id;
  City.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/cities' });
    })
    .catch(err => {
      console.log(err);
    });
}

