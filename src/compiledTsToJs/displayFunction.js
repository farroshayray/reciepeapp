"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderCards_1 = require("../renderCards");
var displayHome = function () {
    console.log('displayHome runs');
    document.getElementById("minimize").style.display = "none";
    document.getElementById("refreshBtn").style.display = "none";
    document.getElementById("firstContainer1").style.display = "none";
    document.getElementById("getRecipeBtn").style.display = "";
};
function displayData(data) {
    var mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    if (data.meals && mealContainer) {
        renderCards_1.default.renderMealCards(data, mealContainer);
    }
    else {
        var notFoundElement = document.createElement('div');
        notFoundElement.classList.add('not-found');
        notFoundElement.textContent = 'Data not found';
        mealContainer.appendChild(notFoundElement);
        mealContainer.style.display = 'flex';
        mealContainer.style.margin = '5vw 0 5vw 0';
    }
}
exports.default = { displayHome: displayHome, displayData: displayData };
