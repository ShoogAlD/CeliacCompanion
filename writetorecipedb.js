const mongoose = require('mongoose');
const Recipe = require('./models/recipe');
const express = require('express');
const writetorecipedb = express();

const dbURI = 'mongodb+srv://shoogdb:shoog123456@cluster0.cqarta9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


const recipe1 = new Recipe({
    recipe_name: 'GF Oat bread',
    ingredients: '2 1/3 cups gluten-free multipurpose flour, 2 1/2 teaspoons baking powder, 1 cup plain Greek yogurt, 1/4 cup coconut oil, 3/4 cup almond milk',
    directions: 'mix dry ingredients, add the liquid ingredients, transfer the mix to a loaf pan and bake for 45 min at 375F',
    picture: './img/recipe1.jpeg',

    });
    recipe1.save()

    const recipe2 = new Recipe({
        recipe_name: 'Pizzelle',
        ingredients: '1 3/4 cups gluten-free white flour, 2 teaspoons baking powder, a pinch of salt, 3 eggs at room temperature, 3/4 cup sugar (try it with honey next time), 1 stick of butter 100 grams, melted and not hot (we can replace it with 1/2 cup of oil if we prefer it without dairy products), 2 teaspoons of vanilla, 1/2 teaspoon white vinegar',
        directions: 'Mix flour, baking powder and salt In a separate bowl, beat the eggs with the sugar and vinegar until it becomes light and light in color, then add the vanilla and butter to it with the whisk.',
        picture: './img/recipe2.jpeg',
    
        });
        recipe2.save()
    
    const recipe3 = new Recipe({
            recipe_name: 'Gluten-free white all-purpose flour',
            ingredients: '1020 grams white rice flour (6 cups), 455g sorghum flour (3 1/4 cups), 225g flour/tapioca starch (1 3/4 cup), 225g potato starch (1 1/4 cup), 20 grams of xanthan gum (1/8 cup), 20g Psyllium Husk Powder (1/8 cup)',
            directions: 'Mix and save in a continer',
            picture: './img/recipe3.jpeg',
        
            });
         recipe3.save()

const recipe4 = new Recipe({
            recipe_name: 'GF Pizza',
            ingredients: '755g (5 cups) all-purpose white flour mix, 255 grams (1 1/2 cups) corn flour, 170g (1 cup) potato starch, 1 teaspoon xanthan gum, 1 teaspoon Psyllium Husk powder, 10 grams (1 tablespoon) of yeast, 17 grams (1 1/2 tablespoons) of salt, 50 grams (1/4 cup) sugar, 850 grams (3 3/4 cups) of warm water, 110 grams (1/2 cup) olive oil, 4 egg whites',
            directions: 'We mix the dry ingredients, then add the liquid ingredients and knead until homogeneous (I knead in the kneading machine, I use the paddle piece instead of the dough piece for the gluten-free dough). We cover it and let it ferment for two hours. After that, it is ready for use, or we put it in the refrigerator with a loose cover for two dimensions (handling it while it is cold is easier, and we use white rice flour for handling and spreading) It can be kept in the refrigerator from 5 days to a week. If we do not consume it during this period, we can divide it according to the quantity we need and freez it.',
            picture: './img/recipe4.jpeg',
        
            });
            recipe4.save()

const recipe5 = new Recipe({
                recipe_name: 'GF sourdough bread',
                ingredients: '70 grams of sorghum flour, 70 grams of buckwheat flour, 60 grams of brown rice flour, 30 grams of peeled, unsalted and ground pumpkin seeds, 75 grams of tapioca starch, 8 grams of salt, 350 grams of warm water, 30 grams of maple syrup, at room temperature, 20g Psyllium Husk (whole not ground), White rice flour as needed to form the dough and sprinkle on the fermentation basket',
                directions: '1- We feed the starter and leave it in a warm place for 6 to 8 hours, We prepare the fiber and leave it in a warm place for 6 to 8 hours, We mix the dough ingredients and knead) and leave it in a warm place to ferment, We form the dough, Preheat the oven to 450 degrees Fahrenheit and place the Dutch oven inside the oven, Transfer the dough to the Dutch oven, Bake with the lid on for 45 minutes',
                picture: './img/recipe5.jpeg',
            
                });
                recipe5.save()