import renderCards from "./renderCards";
import { MealData } from "./interfaces";

const displayHome = (): void => { //giving set of action if function execute,
    console.log('displayHome runs')
    document.getElementById("minimize")!.style.display = "none";
    document.getElementById("refreshBtn")!.style.display = "none";
    document.getElementById("firstContainer1")!.style.display = "none";
    document.getElementById("getRecipeBtn")!.style.display = "";
  };

  function displayData(data: MealData): void { //giving set of action if function execute,
    const mealContainer = document.getElementById('meal-container')!;
    mealContainer.innerHTML = '';
  
    if (data.meals && mealContainer) {
      renderCards.renderMealCards(data, mealContainer);
    } else {
      const notFoundElement = document.createElement('div');
      notFoundElement.classList.add('not-found');
      notFoundElement.textContent = 'Data not found';
      mealContainer.appendChild(notFoundElement);
      mealContainer.style.display = 'flex';
      mealContainer.style.margin = '5vw 0 5vw 0';
    }
  }

  export default { displayHome, displayData };