  import fetchData from "./fetchData";
  import editData from "./editData";
  import animationInOut from "./animationInOut";
  import setDelay from "./setDelay";

  document.getElementById("getRecipeBtn")!.onclick = () => {
    fetchData.getData(editData.editData);
    animationInOut.animationIn('firstContainer1', 2000);
  }; //when getRecipeBtn is clicked
  document.getElementById("refreshBtn")!.onclick = () => {
    document.getElementById('firstContainer1')!.scrollIntoView({ behavior: 'smooth' });
    animationInOut.animationOut('firstContainer1', 600);
    setDelay.setDelay(setDelay.downloadData, 300);
    setDelay.setDelay(setDelay.openElement, 1000);
  }; //when refreshBtn is clicked
  document.getElementById("minimize")!.onclick = () => {
    setDelay.setDelay(setDelay.minimizeButton, 0);
  }; //when minimize button is clicked
  
  document.getElementById('input-search')!.addEventListener('keydown', (e) => {
    if (e instanceof KeyboardEvent && e.keyCode === 13) { // Enter key
      const target = e.target as HTMLInputElement;
      const query = target.value.trim();
      if (query !== '') {
        fetchData.fetchDataSearch(query);
        target.blur();
      }
    }
  }); //when input-search is filled and 'enter'
  
  document.getElementById('button-search')!.addEventListener('click', () => {
    const query = (document.getElementById('input-search') as HTMLInputElement).value.trim();
    if (query !== '') {
      fetchData.fetchDataSearch(query);
      (document.getElementById('input-search') as HTMLInputElement).blur();
    }
  }); //when search button is clicked
  
  fetchData.fetchDataSearch('chicken'); //automatically fetch initial data from API when page is opened
  
  