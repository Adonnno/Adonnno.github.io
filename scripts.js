document.addEventListener('DOMContentLoaded', function () {
    // Create dynamic element
    const dynamicElement = document.createElement('div');
    dynamicElement.classList.add('dynamic-element');
    document.body.appendChild(dynamicElement);

    // Track mouse movements
    document.addEventListener('mousemove', function (e) {
        const x = e.clientX;
        const y = e.clientY;
        dynamicElement.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            card.style.transform = 'scale(1.05)';
            card.style.backgroundColor = '#f0f0f0';
        });
        card.addEventListener('mouseout', function () {
            card.style.transform = 'scale(1)';
            card.style.backgroundColor = '#fff';
        });
    });

    // Typing effect for About Me section
    const aboutText = "Hello! I'm a developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, and JavaScript. Take a look at some of my projects below.";
    let index = 0;
    function type() {
        if (index < aboutText.length) {
            document.getElementById('about-text').innerHTML += aboutText.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    type();
});
