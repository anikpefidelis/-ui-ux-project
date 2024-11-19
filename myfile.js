
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = event.target.getAttribute("href").slice(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
        }
    });
});


function OnClickEvent() {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" }); // Scroll to Projects Section
    }
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust for navigation height
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === currentSection) {
            link.classList.add("active");
        }
    });
});


const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Add Event Listener to Dark Mode Toggle Button (if needed)
const darkModeButton = document.querySelector("#dark-mode-btn");
if (darkModeButton) {
    darkModeButton.addEventListener("click", toggleDarkMode);
}