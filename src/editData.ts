import { Meal } from "./interfaces";
const editData = (meal: Meal): void => { //list of action code to manipulate DOM
    document.getElementById('firstContainer1')!.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("mealName")!.innerHTML = meal.strMeal; 
    document.getElementById('mealInstruction')!.innerHTML = meal.strInstructions.replace(/[.!?]+/g, '$&<br>');
    (document.getElementById('mealImage') as HTMLImageElement).src = meal.strMealThumb;
    document.getElementById('mealOrigin')!.innerHTML = meal.strArea; 
    document.getElementById('mealCategory')!.innerHTML = meal.strCategory;
    document.getElementById('mealIngredients')!.innerHTML = meal.strIngredients;
    const youtubeUrl = meal.strYoutube;
    const embedUrl = youtubeUrl.replace('watch?v=', 'embed/');
    (document.getElementById('mealYoutube') as HTMLIFrameElement).src = embedUrl; 
    document.getElementById('firstContainer1')!.style.backgroundImage = `url(${meal.strMealThumb})`; 
    document.getElementById("mealImage")!.style.height = "27vw"; 
    document.getElementById('getRecipeBtn')!.style.display = "none";
    document.getElementById("firstContainer1")!.style.display = "flex";
    document.getElementById("minimize")!.style.display = "block";
    document.getElementById("refreshBtn")!.style.display = "block";
    let ingredients = '';
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`] !== '' && meal[`strMeasure${i}`] !== '') {
        ingredients += `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}<br>`;
      }
    }
    document.getElementById('mealIngredients')!.innerHTML = ingredients;
  }
  export default { editData };