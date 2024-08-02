const animationOut = (theId, duration1) => {
    document.getElementById(theId).animate([
        { opacity: 1 },
        { opacity: 0 },
      ], {
        duration: duration1,
        fill: 'forwards'
      });
}

const animationIn = (theId, duration1) => {
    document.getElementById(theId).animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: duration1,
        fill: 'forwards'
      });
}

const reduceHeight = (theId, duration1) => {
    document.getElementById(theId).animate([
        { height: firstContainer1.offsetHeight + 'px' },
        { height: '0px' },
      ], {
        duration: duration1,
        fill: 'forwards'
      });
}
export { animationOut };
export { animationIn };
export { reduceHeight };
