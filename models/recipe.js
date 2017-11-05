var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    recipename: String,
    recipetype: String,
    ingredients: String,
    rating: Number
});


module.exports = mongoose.model('Recipe', RecipeSchema);
