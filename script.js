// Get references to the elements
const hoverText = document.querySelector('.text-edit');
const hoverBox = document.getElementById('hover-box');

const hoverText2 = document.querySelector('.house-img');
const hoverBox2 = document.getElementById('hover-box-img');

// Show hover text when hovering over .text-edit
hoverText.addEventListener('mouseenter', () => {
  hoverBox.style.display = 'block';  // Show the hover box
});

hoverText.addEventListener('mouseleave', () => {
  hoverBox.style.display = 'none';  // Hide the hover box
});

hoverText.addEventListener('mousemove', (e) => {
  const offsetX = 10;  // Horizontal distance from cursor
  const offsetY = 10;  // Vertical distance from cursor

  // Position the hover box near the mouse cursor
  hoverBox.style.left = e.pageX + offsetX + 'px';
  hoverBox.style.top = e.pageY + offsetY + 'px';

  hoverBox.textContent = '[click to edit]';  // Text to display
});

// Show hover text when hovering over .house-img
hoverText2.addEventListener('mouseenter', () => {
  hoverBox2.style.display = 'block';  // Show the hover box
});

hoverText2.addEventListener('mouseleave', () => {
  hoverBox2.style.display = 'none';  // Hide the hover box
});

hoverText2.addEventListener('mousemove', (e) => {
  const offsetX = 10;  // Horizontal distance from cursor
  const offsetY = 10;  // Vertical distance from cursor

  // Position the hover box near the mouse cursor
  hoverBox2.style.left = e.pageX + offsetX + 'px';
  hoverBox2.style.top = e.pageY + offsetY + 'px';

  hoverBox2.textContent = '[find the right window...]';  // Text to display
});
