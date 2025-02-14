document.addEventListener("DOMContentLoaded", () => {
    const discoverButton = document.getElementById("discoverButton");
    const newSection = document.getElementById("new-section");
  
    if (discoverButton && newSection) {
      discoverButton.addEventListener("click", () => {
        newSection.scrollIntoView({ behavior: "smooth" });
      });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const iconContainers = document.querySelectorAll(".icon-container");
  
    // Add animation class to each icon container after a short delay
    iconContainers.forEach((container, index) => {
      setTimeout(() => {
        container.classList.add("animate");
      }, index * 300); // Stagger the animations for each icon
    });
});
