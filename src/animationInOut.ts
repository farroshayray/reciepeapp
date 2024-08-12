const animationOut = (theId: string, duration1: number): void => { //giving animation opacity 1 to 0
    document.getElementById(theId)!.animate([
      { opacity: 1 },
      { opacity: 0 },
    ], {
      duration: duration1,
      fill: 'forwards'
    });
  }
  
  const animationIn = (theId: string, duration1: number): void => { //giving animation opacity 0 to 1
    document.getElementById(theId)!.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: duration1,
      fill: 'forwards'
    });
  }

  export default { animationIn, animationOut };