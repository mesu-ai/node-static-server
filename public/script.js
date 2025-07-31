// JavaScript for static file server demo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Static file server page loaded successfully!');
    
    // Add current time to the page
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleString();
    }
    
    // Add click counter functionality
    let clickCount = 0;
    const button = document.getElementById('demo-button');
    const counter = document.getElementById('click-counter');
    
    if (button && counter) {
        button.addEventListener('click', function() {
            clickCount++;
            counter.textContent = `Button clicked ${clickCount} times!`;
            
            // Add animation effect
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Test CSS and JS loading
    const statusElement = document.getElementById('load-status');
    if (statusElement) {
        statusElement.innerHTML = '<span style="color: green;">✅ CSS and JavaScript loaded successfully!</span>';
    }
});
