var recipe = require('../models/recipe');
var express = require('express');
var router = express.Router();

router.findAll = function(req, res) {
    // Return a JSON representation of our list
    res.json(recipe);
}

router.findOne = function(req, res) {

    var recipes = getByValue(recipes,req.params.id);

    if(recipes != null)
        res.json(recipes);
    else
        res.json({ message: 'Recipe NOT Found!'});
}


function getByValue(arr,id)
{
    var result = arr.filter(function (t) {
        return t.id==id});
    return result ? result[0] : null;


}

router.addRecipe = function(req, res) {
    var id = Math.floor((Math.random() * 1000000) + 1); //Randomly generate an id
    var currentSize = recipe.length;
    var recipename = 'steak';
    var ingredients= 'Beef';
    var rating= 2;

    recipe.push({"id":id, "recipename" :recipename,"ingredients": ingredients, "rating": rating});

    if((currentSize + 1) == recipe.length)
        res.json({ message: 'Recipe Added!'});
    else
        res.json({ message: 'Recipe NOT Added!'});
}

router.deleteRecipe = function(req, res) {
    var recipes = getByValue(recipe,req.params.id);
    var index = recipe.indexOf(recipes);

    var currentSize = recipe.length;
    recipe.splice(index, 1);

    if((currentSize - 1) == recipe.length)
        res.json({ message: 'Recipe Deleted!'});
    else
        res.json({ message: 'Recipe NOT Deleted!'});
}
module.exports = router;