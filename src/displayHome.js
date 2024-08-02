const displayHome = (parameter1) => {
    var restyle = parameter1
    document.getElementById("minimize").style[restyle] = "none"; //minimize button will be disappeared when #minimize is clicked
    document.getElementById("refreshBtn").style[restyle] = "none";
    document.getElementById("firstContainer1").style[restyle] = "none"; //the container will be disappeared when #minimize is clicked
    document.getElementById("getRecipeBtn").style[restyle] = "";//the #getRecipeBtn will be back to the default setting refer to the style.css
  };

  export { displayHome };