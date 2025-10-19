
  // Grab all the menu links
const listLinks = document.querySelectorAll('.nav-menu a');
// Grab the popup and close button
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

// Add click event to each menu link
listLinks.forEach(link => {
  if (link.getAttribute('href') === '' || link.getAttribute('href') === '#') {
    link.addEventListener('click', (event) => {
      event.preventDefault();       // Stop going to a blank page
      popup.style.display = 'flex'; // Show the popup
    });
  }
});

// Close popup when clicking the button
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Optional: close popup if user clicks outside the box
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});


// If I want a normal alert display, then use this code
//   // 1. Select all <a> elements inside the .nav-menu
//   let menuNavLink = document.querySelectorAll('.nav-menu a');

//   // 2. Loop through each link
//   menuNavLink.forEach(link => {
//     // 3. Check if href is empty
//     if (link.getAttribute('href') === '') {
//       // 4. Add an event listener
//       link.addEventListener('click', function(event) {
//         event.preventDefault(); // prevent opening a blank page
//         alert("¡Esta página está en construcción!");
//       });
//     }
//   });