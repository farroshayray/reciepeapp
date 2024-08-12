export interface Meal {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strArea: string;
    strCategory: string;
    strYoutube: string;
    [key: string]: any; // To accommodate dynamic properties like strIngredient1, strMeasure1, etc.
  }
  
 export interface MealData {
    meals: Meal[] | null;
  }