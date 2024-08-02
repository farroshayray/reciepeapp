import { getData, editData } from "./fetchdata";
import { animationOut, animationIn } from "./animate";
import { setDelay } from "./delay";
import { openElement, downloadData, minimizeButton } from "./delayedObject";
import { displayHome } from "./displayHome";
import { fetchDataSearch } from "./fetchWithSearch";

document.getElementById("getRecipeBtn").onclick = () => { //when #getRecipeBtn clicked it will be run functions (it can accomodate more than 1 function)
  getData(editData);
  animationIn('firstContainer1',2000);
};
document.getElementById("refreshBtn").onclick = () => { 
  
  document.getElementById('firstContainer1').scrollIntoView({behavior: 'smooth'});
  animationOut('firstContainer1',600);
  setDelay(downloadData, 300);
  setDelay(openElement, 1000); //animationIn('firstContainer1',2000);
};
document.getElementById("minimize").onclick = () => {
  setDelay(minimizeButton, 0);
};//when #minimize button is clicked it will run displayHome() function



document.getElementById('input-search').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) { // tombol Enter
    const query = e.target.value.trim();
    if (query !== '') {
      fetchDataSearch(query);
      e.target.blur(); // menghilangkan fokus dari input-search
    }
  }
});

document.getElementById('button-search').addEventListener('click', () => {
  const query = document.getElementById('input-search').value.trim();
  if (query !== '') {
    fetchDataSearch(query);
    document.getElementById('input-search').blur(); // menghilangkan fokus dari input-search
  }
});

fetchDataSearch('chicken');

export { displayHome };