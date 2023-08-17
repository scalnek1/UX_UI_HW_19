// index.js
console.log("JavaScript file loaded correctly.");

// Add an event listener for a click on a button
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    console.log("Button clicked!");
    // Add your UI manipulation or animation code here
});
// index.js
$(document).ready(function() {
    console.log("jQuery loaded and DOM ready.");

    // Add an event listener for a click on a button using jQuery
    $("#myButton").click(function() {
        console.log("Button clicked!");
        // Add your UI manipulation or animation code here using jQuery
    });
});
