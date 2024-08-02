import { displayData } from "./displayDataBySearch";

async function fetchDataSearch(query) {//fetch search data
    try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    if(!response.ok) {
        throw new Error ('There is an error when fetching data...');
    }
    const data = await response.json();
    displayData(data);
    console.log(data);
    } catch (error) {
        console.error('Error:', error);
        displayData({ error: 'The server is not responding' });
        // alert('The server is not responding');
    }
  }

  export {fetchDataSearch};