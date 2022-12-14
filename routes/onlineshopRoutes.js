const express = require('express');
const router = express.Router();


const onlineshopController = require('../controllers/onlineshopController');
const upload = require('../middleware/upload') 

router.get('/onlineshops/create', onlineshopController.onlineshop_create_get);

//to get all onlineshops
router.get('/onlineshops', onlineshopController.onlineshop_index);

//To add an online shop
router.post('/onlineshops', upload.single('logo'), onlineshopController.onlineshop_create_post);

 
//To get an online details
router.get('/onlineshops/:id', onlineshopController.onlineshop_details);

//To find an online shop by id and delete 
router.delete('/onlineshops/:id',onlineshopController.onlineshop_delete);



module.exports = router;