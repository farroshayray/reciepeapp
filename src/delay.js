const setDelay = (callback, time) => {
    setTimeout(function() {
        console.log("delayed");
        callback();
    }, time);
    };
   
export { setDelay };