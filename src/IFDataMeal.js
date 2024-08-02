function renderMealCards(data, mealContainer) {
    data.meals.forEach(meal => {
      const card = document.createElement('div');
      card.classList.add('card', 'card-style');
      // img
      const image = document.createElement('img');
      image.src = meal.strMealThumb;
      image.alt = meal.strMeal;
      image.classList.add('image-style');
      card.appendChild(image);
      // meal title
      const title = document.createElement('h4');
      title.innerHTML = meal.strMeal;
      title.classList.add('title-style');
      card.appendChild(title);
      // card-style
      mealContainer.appendChild(card);
      mealContainer.style.display = 'grid';
  
      // add event listener to card
      card.addEventListener('click', () => {
        // show data image, strMeal, and strIngredient
        const mealDetailContainer = document.getElementById('meal-detail-container');
        mealDetailContainer.innerHTML = '';
        const mealDetail = document.createElement('div');
        mealDetail.classList.add('meal-detail');
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`] && meal[`strMeasure${i}`]) {
            ingredients.push(`<li>${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}</li>`);
          }
        }
        mealDetail.innerHTML = `
          <h2>${meal.strMeal}</h2>
          <img class="meal-search-image" src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <p>Ingredients:</p>
          <ul class="meal-ingredient">
            ${ingredients.join('')}
          </ul>
          <p>Instructions:</p>
          <p class="instruction">${meal.strInstructions.replace(/\. /g, '.<br>')}</p>
          <p>Youtube:</p>
          <iframe class="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}" frameborder="0" allowfullscreen></iframe>
        `;
        mealDetailContainer.appendChild(mealDetail);
        document.getElementById('meal-container').style.display = 'none'; // hide meal-container
  
        // add button to close meal-detail and return meal-container
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.classList.add('close-button');
        mealDetail.appendChild(closeButton);
  
        closeButton.addEventListener('click', () => {
          mealDetailContainer.innerHTML = '';
          document.getElementById('meal-container').style.display = 'grid'; // show meal-container
        });
      });
    });
}
   
export {renderMealCards};