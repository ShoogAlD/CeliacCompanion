const Onlineshop = require('../models/onlineshop');



module.exports.onlineshop_index = (req, res) => {
  Onlineshop.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('onlineshops/index', { onlineshops: result, title: 'All online shops' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.onlineshop_details = (req, res) => {
  const id = req.params.id;
  Onlineshop.findById(id)
    .then(result => {
      res.render('onlineshops/details', { onlineshop: result, title: 'online shop details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'online shop not found' });
    });
}

module.exports.onlineshop_create_get = (req, res) => {
  res.render('onlineshops/create', { title: 'Add a new onlineshops' });
}

module.exports.onlineshop_create_post = (req, res) => {
  const onlineshop = new Onlineshop(req.body);
  if(req.file) {
    onlineshop.logo = req.file.path
  } else {
    onlineshop.logo = 'img/GF.png'
  }
  onlineshop.save()
    .then(result => {
      res.redirect('/onlineshops');
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.onlineshop_delete = (req, res) => {
  const id = req.params.id;
  Onlineshop.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/onlineshops' });
    })
    .catch(err => {
      console.log(err);
    });
}

