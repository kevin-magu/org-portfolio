// Get references to the elements
const openDiv = document.getElementById('openDiv');
const contentDiv = document.getElementById('contentDiv');
const closeButton = document.getElementById('closeButton');

// Add event listeners
openDiv.addEventListener('click', function() {
  contentDiv.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  contentDiv.style.display = 'none';
});
