
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


// Get the reference to the .blue element
const s1h1 = document.querySelector('.blue');

// Get the reference to the .section1 element
const section1 = document.querySelector('#section1');

// Add a click event listener to .blue
s1h1.addEventListener('click', () => {
    console.log('Blue clicked');
    
    // Toggle the "gradient-background" class on .section1
    section1.classList.toggle('gradient-background');
});

