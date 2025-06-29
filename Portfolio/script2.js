//  Home senction


const roles = ["Python Developer", "Full Stack Developer", "Backend Engineer"];
const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    let currentRole = roles[roleIndex];
    let visibleText = currentRole.substring(0, charIndex);
    typingElement.textContent = visibleText;

    if (isDeleting) {
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    } else {
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeAnimation, 1000); // Pause before deleting
            return;
        }
    }

    const speed = isDeleting ? 60 : 120;
    setTimeout(typeAnimation, speed);
}

window.onload = typeAnimation;

window.onload = type;



//  about 

window.addEventListener('scroll', () => {
    const content = document.querySelector('.animate-content');
    const title = document.querySelector('.animate-title');
    const rect = content.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        title.style.opacity = '1';
    }
});


//  projects

const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});

// contact section
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");
    this.reset();
});

// top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}