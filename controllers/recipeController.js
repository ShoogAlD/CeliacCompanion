const Recipe = require('../models/recipe');


// module.exports.signup_get = (req, res) => {
//     res.render('signup', {title: 'Signup'});
// }
module.exports.recipe_index = (req, res) => {
  Recipe.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('recipes/index', { recipes: result, title: 'All recipes' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.recipe_details = (req, res) => {
  const id = req.params.id;
  Recipe.findById(id)
    .then(result => {
      res.render('recipes/details', { recipe: result, title: 'Recipe Details' });
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

