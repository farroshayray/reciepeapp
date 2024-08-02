import { renderMealCards } from "./IFDataMeal";
function displayData(data) {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
  
    if(mealContainer) {
        renderMealCards(data, mealContainer);
    } else {
      const notFoundElement = document.createElement('div');
      notFoundElement.classList.add('not-found');
      notFoundElement.textContent = 'data not found';
      mealContainer.appendChild(notFoundElement);
      mealContainer.style.display = 'flex';
      mealContainer.style.margin = '5vw 0 5vw 0';
    }
  }

  export { displayData };