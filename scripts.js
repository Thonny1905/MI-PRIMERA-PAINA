// Slider
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});

// Scroll Animation
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollTop = document.documentElement.scrollTop;

    sections.forEach(section => {
        if (section.offsetTop < scrollTop + window.innerHeight * 0.75) {
            section.classList.add('fade-in');
        }
    });
});
