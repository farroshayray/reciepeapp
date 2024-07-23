let file = "https://www.themealdb.com/api/json/v1/1/random.php"; // Updated URL
fetch(file)
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
        const meal = data.meals[0]; // Access the first meal
        document.getElementById("fetch-recipe").innerHTML = meal.strInstructions; // Display instructions
        document.getElementById("meal-name").innerHTML = meal.strMeal; // Display meal name
        document.getElementById("meal-image").src = meal.strMealThumb; // Display meal image
        document.getElementById("fetch-category").innerHTML = meal.strCategory; // Display meal image
        document.getElementById("fetch-area").innerHTML = meal.strArea; // Display meal image
        document.getElementById("fetch-youtube").src = meal.strYoutube; // Display meal image
        document.getElementById("ingredients").innerHTML = `
            ${meal.strIngredient1} - ${meal.strMeasure1}<br>
            ${meal.strIngredient2} - ${meal.strMeasure2}<br>
            ${meal.strIngredient3} - ${meal.strMeasure3}<br>
            ${meal.strIngredient4} - ${meal.strMeasure4}<br>
            ${meal.strIngredient5} - ${meal.strMeasure5}<br>
            ${meal.strIngredient6} - ${meal.strMeasure6}<br>
            ${meal.strIngredient7} - ${meal.strMeasure7}<br>
        `; // Display ingredients
    });