async function getData(execute) {
    try {
      const response = await fetch ('https://www.themealdb.com/api/json/v1/1/random.php');
      if(!response.ok) {
        throw new Error ('There is an error when fetching data');
      }
      const dataMeal = await response.json();
      const meal = dataMeal.meals[0];
      console.log(meal);
      execute(meal);
    } catch (error) {
          console.log(error);
          alert("The server is not responding")
        }
    };

    const editData = (meal) => {
      // document.getElementById("firstContainer1").style.display = "none";
      document.getElementById('firstContainer1').scrollIntoView({behavior: 'smooth'});
      document.getElementById("mealName").innerHTML = meal.strMeal; //call the content of "title" in recipe variable to be showed in mealName id
      document.getElementById('mealInstruction').innerHTML = meal.strInstructions; //call the content of "instruction" in recipe variable to be showed in mealInstruction id
      document.getElementById('mealInstruction').innerHTML = meal.strInstructions.replace(/[.!?]+/g, '$&<br>');
      document.getElementById('mealImage').src = meal.strMealThumb; //call the content of "image" in recipe variable to be showed in mealImage id with replace the "src" data with recipe.image
      document.getElementById('mealOrigin').innerHTML = meal.strArea; //call the content of "origin" in recipe variable to be showed in mealOrigin id
      document.getElementById('mealCategory').innerHTML = meal.strCategory; //call the content of "category" in recipe variable to be showed in mealCategory id
      document.getElementById('mealIngredients').innerHTML = meal.strIngredients; //call the content of "ingredients" in recipe variable to be showed in mealIngredients id
      const youtubeUrl = meal.strYoutube;
      const embedUrl = youtubeUrl.replace('watch?v=', 'embed/');
      document.getElementById('mealYoutube').src = embedUrl; //call the content of "youtube" in recipe variable to be showed in mealYoutube id with replace the "src" data with recipe.youtube
      document.getElementById('firstContainer1').style.backgroundImage = `url(${meal.strMealThumb})`; //set the element background image to be the same with fetch object
      document.getElementById("mealImage").style.height = "27vw"; //set the height of the picture from javascript
      document.getElementById('getRecipeBtn').style.display = "none"; //the button will be disappeared
      document.getElementById("firstContainer1").style.display = "flex"; //the element will be showed after clicked a button
      document.getElementById("minimize").style.display = "block"; //a minimize button will be showed after cilck #getRecipeBtn
      document.getElementById("refreshBtn").style.display = "block";
      let ingredients = '';
      for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`] !== '' && meal[`strMeasure${i}`] !== '') {
          ingredients += `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}<br>`;
      }
      }
      document.getElementById('mealIngredients').innerHTML = ingredients;
    }
    export {getData, editData};