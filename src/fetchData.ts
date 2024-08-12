import displayFunction from "./displayFunction";
import { MealData, Meal } from "./interfaces";
  
  async function fetchDataSearch(query: string): Promise<void> { // fetch API to get data based on what we search by name
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if (!response.ok) {
        throw new Error('There is an error when fetching data...');
        console.log(response);
      }
      const data: MealData = await response.json();
      displayFunction.displayData(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
      displayFunction.displayData({ meals: null });
    }
  }

  async function getData(execute: (meal: Meal) => void): Promise<void> {// fetch API to get data based on random recipe
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      if (!response.ok) {
        throw new Error('There is an error when fetching data');
      }
      const dataMeal: MealData = await response.json();
      const meal = dataMeal.meals?.[0];
      console.log(dataMeal);
      if (meal) {
        execute(meal); // only call editData if meal is not undefined
        console.log('meal true');
      } else {
        console.log('No meal data found');
      }
    } catch (error) {
      console.error(error);
      alert("The server is not responding");
    }
  }

  export default {fetchDataSearch, getData};