"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderMealCards(data, mealContainer) {
    if (data.meals === null) {
        var notFoundElement = document.createElement('div');
        notFoundElement.classList.add('not-found');
        notFoundElement.textContent = 'Data not found, try another keyword';
        mealContainer.appendChild(notFoundElement);
        mealContainer.style.display = 'flex';
        mealContainer.style.margin = '5vw 0 5vw 0';
        console.log('Data tidak ditemukan');
        return;
    }
    data.meals.forEach(function (meal) {
        var card = document.createElement('div');
        card.classList.add('card', 'card-style');
        // img
        var image = document.createElement('img');
        image.src = meal.strMealThumb;
        image.alt = meal.strMeal;
        image.classList.add('image-style');
        card.appendChild(image);
        // meal title
        var title = document.createElement('h4');
        title.innerHTML = meal.strMeal;
        title.classList.add('title-style');
        card.appendChild(title);
        // card-style
        mealContainer.appendChild(card);
        mealContainer.style.display = 'grid';
        // add event listener to card
        card.addEventListener('click', function () {
            // show data image, strMeal, and strIngredient
            var mealDetailContainer = document.getElementById('meal-detail-container');
            mealDetailContainer.innerHTML = '';
            var mealDetail = document.createElement('div');
            mealDetail.classList.add('meal-detail');
            var ingredients = [];
            for (var i = 1; i <= 20; i++) {
                if (meal["strIngredient".concat(i)] && meal["strMeasure".concat(i)]) {
                    ingredients.push("<li>".concat(meal["strIngredient".concat(i)], " - ").concat(meal["strMeasure".concat(i)], "</li>"));
                }
            }
            mealDetail.innerHTML = "\n          <h2>".concat(meal.strMeal, "</h2>\n          <img class=\"meal-search-image\" src=\"").concat(meal.strMealThumb, "\" alt=\"").concat(meal.strMeal, "\">\n          <p>Ingredients:</p>\n          <ul class=\"meal-ingredient\">\n            ").concat(ingredients.join(''), "\n          </ul>\n          <p>Instructions:</p>\n          <p class=\"instruction\">").concat(meal.strInstructions.replace(/\. /g, '.<br>'), "</p>\n          <p>Youtube:</p>\n          <iframe class=\"youtubeVideo\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/").concat(meal.strYoutube.split('v=')[1], "\" frameborder=\"0\" allowfullscreen></iframe>\n        ");
            mealDetailContainer.appendChild(mealDetail);
            document.getElementById('meal-container').style.display = 'none'; // hide meal-container
            // add button to close meal-detail and return meal-container
            var closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.classList.add('close-button');
            mealDetail.appendChild(closeButton);
            closeButton.addEventListener('click', function () {
                mealDetailContainer.innerHTML = '';
                document.getElementById('meal-container').style.display = 'grid'; // show meal-container
                var inputSearch = document.getElementById('firstContainer');
                var inputSearchTop = inputSearch.offsetTop;
                window.scrollTo({ top: inputSearchTop, behavior: 'smooth' });
            });
        });
    });
}
exports.default = { renderMealCards: renderMealCards };
