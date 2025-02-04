// Get the reference to the s1-p1 element
const s1p1 = document.querySelector('.s1-p1');

// Add a click event listener to .s1-p1
s1p1.addEventListener('click', () => {
    // Remove the "clicked" class to reset animation
    s1p1.classList.remove('clicked');
    
    // Trigger a reflow to force the animation to restart (this is important for the animation to restart every click)
    void s1p1.offsetWidth; // This line forces a reflow, which is needed to restart the animation
    
    // Add the "clicked" class to start the animation again
    s1p1.classList.add('clicked');
});
