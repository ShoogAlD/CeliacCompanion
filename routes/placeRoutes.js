const express = require('express');
const router = express.Router();
//const Place = require('../models/place');
const placeController = require('../controllers/placeController');
const upload = require('../middleware/upload') 

//to get all places
router.get('/places', placeController.place_index);

//To add a place
router.post('/places', upload.single('logo'), placeController.place_create_post);

router.get('/places/create', placeController.place_create_get);

router.get('/places/bycity/:city', placeController.place_by_city_get);
 
//To get a place detail
router.get('/places/:id', placeController.place_details);

//To find a place by id and delete 
router.delete('/places/:id',placeController.place_delete);

// router.get('/findGFplace', (req,res) =>{
//     res.render('findGFplace' , {title : 'Find GF Place'});
// });


module.exports = router;