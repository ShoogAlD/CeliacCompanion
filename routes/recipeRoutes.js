
const express = require('express');
const router = express.Router();
//const Place = require('../models/place');
const recipeController = require('../controllers/recipeController');
const upload = require('../middleware/upload') 

router.get('/recipes/create', recipeController.recipe_create_get);
//to get all recipes
router.get('/recipes', recipeController.recipe_index);

//To add a recipe
router.post('/recipes', upload.single('picture'), recipeController.recipe_create_post);

 
//To get a recipe detail
router.get('/recipes/:id', recipeController.recipe_details);

//To find a recipe by id and delete 
router.delete('/recipes/:id',recipeController.recipe_delete);



module.exports = router;