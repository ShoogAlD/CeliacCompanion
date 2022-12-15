
const Recipe = require('../models/recipe');
const express = require('express')
//const { getDb, connectToDb } = require('./db')
const { ObjectId } = require('mongodb')

// module.exports.signup_get = (req, res) => {
//     res.render('signup', {title: 'Signup'});
// }
module.exports.recipe_index = (req, res) => {
    const page = req.query.p || 0;
    const recipesPerPage = 5;
    let recipes = [];
  
    Recipe.find()
    .skip(page * recipesPerPage)
    .limit(recipesPerPage)
    .then((result => {
        result.forEach(recipe => recipes.push(recipe))
        res.render('recipes/index', { recipes: result, title: 'All recipes', recipes : recipes });
    }))
    .catch((err) => {
      console.log(err);
    });
}

module.exports.recipe_details = (req, res) => {
  const id = req.params.id;
  Recipe.findById(id)
    .then(result => {
      res.render('recipes/details', { recipe: result, title: 'Recipe Details'});
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Recipe not found' });
    });
}

module.exports.recipe_create_get = (req, res) => {
  res.render('recipes/create', { title: 'Add a new recipe' });
}

module.exports.recipe_create_post = (req, res) => {
  const recipe = new Recipe(req.body);
  if(req.file) {
    recipe.picture = req.file.path
  } else {
    recipe.picture = 'img/GF.png'
  }
  recipe.save()
    .then(result => {
      res.redirect('/recipes');
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.recipe_delete = (req, res) => {
  const id = req.params.id;
  Recipe.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/recipes' });
    })
    .catch(err => {
      console.log(err);
    });
}

// module.exports.recipe_update = (req, res) => {
//     const updates = req.body
  
//     if (ObjectId.isValid(req.params.id)) {
  
//       db.collection('recipe')
//         .updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})
//         .then(result => {
//           res.status(200).json(result)
//         })
//         .catch(err => {
//           res.status(500).json({error: 'Could not update document'})
//         })
  
//     } else {
//       res.status(500).json({error: 'Could not update document'})
//     }
//   }



  module.exports.recipe_update_get = (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
      .then(result => {
        res.render('recipes/update', { recipe: result, title: 'Recipe Details' });
      })
      .catch(err => {
        console.log(err);
        res.render('404', { title: 'Recipe not found' });
      });
  }
