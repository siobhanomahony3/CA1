var recipe = require('../models/recipe');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/recipes');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});

router.findAll = function(req, res) {
    recipe.find(function(err, recipes) {
        if (err)
            res.send(err);

        res.json(recipes);
    });
}


router.findOne = function(req, res) {

    recipe.find({ "_id" : req.params.id },function(err, recipes) {
        if (err)
            res.json({ message: 'Recipe NOT Found!', errmsg : err } );
        else
            res.json(recipes);
    });
}

function getByValue(arr,id)
{
    var result;
    result= arr.filter(function (o) {
        return o.id==id;
    });

    return result ? result[0] : null;


}
/*
router.addRecipe = function(req, res) {

    var id = Math.floor((Math.random() * 10000) + 1);

    //declare recepie id as randomly generated id
    //other will be 0
    req.body.id=id;
    var currentSize = recipe.length;

    //add the entire request to the recipe model aray
    recipe.push(req.body);

    if((currentSize + 1) == recipe.length)
        res.json({ message: 'Recipe Added!'});
    else
        res.json({ message: 'Recipe NOT Added!'});
}
*/
router.addRecipe = function(req, res) {

    var recipes = new recipe();

    recipes.recipename = req.body.recipename;
    recipes.recipetype = req.body.recipetype;
    recipes.ingredients = req.body.ingredients;
    recipes.rating = req.body.rating;

    console.log('Adding Recipe: ' + JSON.stringify(recipes));

    recipes.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Recipe Added!', data: recipes });
    });
}

router.updateRecipe = function(req, res) {

    recipe.findById(req.params.id, function(err,recipes) {
        if (err)
            res.send(err);
        else {
            recipes.rating = req.body.rating;
            recipes.save(function (err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'Rating Updated!', data: recipes });
            });
        }
    });
}
/*
router.updateRecipe = function(req, res) {
    var recipes = getByValue(recipe,req.params.id);
    recipes.rating += 1;
}

router.updateRecipe1 = function(req, res) {
    var recipes = getByValue(recipe,req.params.id);
    recipes.rating -= 1;
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
}*/
router.deleteRecipe = function(req, res) {

    recipe.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Recipe Deleted!'});
    });
}




module.exports = router;