// Get elements from DOM
var count = document.getElementById("count");

// Check if browser supports Local Storage
if(typeof(Storage) !== "undefined") {
  
    // Check if localStorage.clickCount is defined
    if (localStorage.clickCount) {
      // Everything is fine :D
    } else {
      // Set to 1
      localStorage.clickCount = 0;
    }
  
    // Function when button is clicked
    function btnClicked() {
    
      // Count 1
      localStorage.clickCount = Number(localStorage.clickCount) + 1;
      
      // Outputs the clickCount
      count.innerHTML = localStorage.clickCount;
    }
    // Outputs the clickCount
    count.innerHTML = localStorage.clickCount;
    
} else {
  // If the browser doesn't support Local Storage
  window.alert("Sorry, your browser does not support web storage...");
}