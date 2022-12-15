const express = require('express');
const router = express.Router();


const cityController = require('../controllers/cityController');




router.get('/cities', cityController.city_index);

router.post('/cities', cityController.city_create_post);
router.get('/cities/create', cityController.city_create_get);

router.get('/cities/:id', cityController.city_details);

router.delete('/cities/:id',cityController.city_delete);



module.exports = router;