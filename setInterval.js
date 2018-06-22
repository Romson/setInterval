// setInterval (higher order function) -- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

function sing() {
    console.log('Twinkle twinkle little star');
    console.log('How i wonder what you are');
    console.log('Up above the world so high');
    console.log('Like a diamond in the sky');
    console.log('Twinkle, twinkle little star');
    console.log('How I wonder what you are');
} setInterval(sing, 1000); //Calling sing every 1000ms

//Anonymous functions
setInterval(function() {
    console.log('I am an anonymous function');
    console.log('This is AWESOME!');
}, 2000);