
// Get the reference to the s1-p1 element
const s1p1 = document.querySelector('.s1-p1');

// Add a click event listener to .s1-p1
s1p1.addEventListener('click', () => {
    console.log('bird clicked');
    s1p1.classList.remove('clicked');
    
    // Trigger a reflow to force the animation to restart (this is important for the animation to restart every click)
    void s1p1.offsetWidth; // This line forces a reflow, which is needed to restart the animation
    
    // Add the "clicked" class to start the animation again
    s1p1.classList.add('clicked');
});

// Get the reference to the s1-p2 element
const s1p2 = document.querySelector('.s1-p2');

// Add a click event listener to .s1-p2
s1p2.addEventListener('click', () => {
    console.log('tree clicked');
    s1p2.classList.remove('clicked');
    void s1p2.offsetWidth; // This line forces a reflow
    s1p2.classList.add('clicked');
    setTimeout(() => {
        s1p2.classList.remove('clicked');
    }, 4000);
});


// Get the reference to the s1-p3 element
const s1p3 = document.querySelector('.s1-p3');

// Add a click event listener to .s1-p1
s1p3.addEventListener('click', () => {
    console.log('runner clicked');
    s1p3.classList.remove('clicked');
    
    // Trigger a reflow to force the animation to restart (this is important for the animation to restart every click)
    void s1p3.offsetWidth; // This line forces a reflow, which is needed to restart the animation
    
    // Add the "clicked" class to start the animation again
    s1p3.classList.add('clicked');
});




document.addEventListener("DOMContentLoaded", function() {
    // Get the reference to the s2-p3 element
    const s2p3 = document.querySelector('.s2-p3');
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');

    // Track whether the background image has been toggled
    let isToggled = false;

    // Make sure bg1 is active when the page loads
    bg1.classList.add('active');
    bg2.classList.remove('active');

    // Add click event listener to s2-p3
    s2p3.addEventListener('click', function() {
        if (isToggled) {
            // Remove active class from bg2 (hide sunset) and add to bg1 (show section2bg)
            bg1.classList.add('active');
            bg2.classList.remove('active');
        } else {
            // Remove active class from bg1 (hide section2bg) and add to bg2 (show sunset)
            bg1.classList.remove('active');
            bg2.classList.add('active');
        }

        // Toggle the state
        isToggled = !isToggled;
    });
});


const s1p4 = document.querySelector('.s1-p4');
const blue = document.querySelector('.blue');
const drawn = document.querySelector('.drawn');  // Get the "DRAWN" link
const section1 = document.querySelector('#section1');

// Handle click on s1-p4 (scroll to section2)
s1p4.addEventListener('click', (e) => {
    console.log("s1-p4 clicked");

    // Smooth scroll to section2
    section2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Handle click on blue (gradient background toggle on section1)
blue.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevent the click event from bubbling up
    console.log("Blue clicked");

    // Toggle the gradient background on section1
    section1.classList.toggle('gradient-background');
});

// Handle click on "DRAWN" (scroll back to section1)
drawn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default link behavior (optional)

    console.log("DRAWN clicked");

    // Smooth scroll back to section1
    section1.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});



// Get references to the elements
const hoverText = document.getElementById('section2');
const hoverBox = document.getElementById('hover-box');

const hoverText2 = document.getElementById('section1');
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

  hoverBox.textContent = 'click every link you can find!';  // Text to display
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
  
    hoverBox2.textContent = "looking outside, looking in... it's all the same";  // Text to display
  });
  