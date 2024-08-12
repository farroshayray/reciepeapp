"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editData = function (meal) {
    document.getElementById('firstContainer1').scrollIntoView({ behavior: 'smooth' });
    document.getElementById("mealName").innerHTML = meal.strMeal;
    document.getElementById('mealInstruction').innerHTML = meal.strInstructions.replace(/[.!?]+/g, '$&<br>');
    document.getElementById('mealImage').src = meal.strMealThumb;
    document.getElementById('mealOrigin').innerHTML = meal.strArea;
    document.getElementById('mealCategory').innerHTML = meal.strCategory;
    document.getElementById('mealIngredients').innerHTML = meal.strIngredients;
    var youtubeUrl = meal.strYoutube;
    var embedUrl = youtubeUrl.replace('watch?v=', 'embed/');
    document.getElementById('mealYoutube').src = embedUrl;
    document.getElementById('firstContainer1').style.backgroundImage = "url(".concat(meal.strMealThumb, ")");
    document.getElementById("mealImage").style.height = "27vw";
    document.getElementById('getRecipeBtn').style.display = "none";
    document.getElementById("firstContainer1").style.display = "flex";
    document.getElementById("minimize").style.display = "block";
    document.getElementById("refreshBtn").style.display = "block";
    var ingredients = '';
    for (var i = 1; i <= 20; i++) {
        if (meal["strIngredient".concat(i)] !== '' && meal["strMeasure".concat(i)] !== '') {
            ingredients += "".concat(meal["strIngredient".concat(i)], " - ").concat(meal["strMeasure".concat(i)], "<br>");
        }
    }
    document.getElementById('mealIngredients').innerHTML = ingredients;
};
exports.default = { editData: editData };
