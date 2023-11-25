//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const targetElement = document.getElementById('target');
  let domLevel = 0;
  
  // Traverse through the parent elements until reaching the root (html) element
  let parent = targetElement.parentElement;
  while (parent) {
    domLevel++;
    parent = parent.parentElement;
  }

  // Display the DOM level using alert
  alert(`The level of the element is: ${domLevel}`);
});
