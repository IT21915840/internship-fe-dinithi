## Summary of Work - eight25 Internship Assignment (FE) - Dinithi

1. **HTML Structure:**
   - Developed a well-structured index.html with semantic HTML.
   - Implemented a middle section featuring the main heading, subheading, and CTA button.
   - Integrated left and right sections with icon-based design elements.
   - Added a scrollable new section (new-section) featuring a title, CTA button, and an image frame.

2. **Styling with SCSS:**
   - Used SCSS instead of CSS for better organization and maintainability.
   - Defined variables ($font-stack) and mixins (@mixin flex-center) for reusable styles.
   - Implemented animations for icons that assemble dynamically on page load.
   - Designed a gradient background with a grid overlay for the new section.
   - Ensured responsive design and applied smooth scrolling to enhance the user experience.
   - Compiled SCSS to CSS using the command: sass --watch styles/style.scss styles/style.css


3. **JavaScript Enhancements:**
   - Implemented a smooth scrolling feature where clicking the "Discover Success Stories" button automatically scrolls to the new section.
   - Added staggered animations for icon elements, making them appear sequentially for a visually engaging effect.

4. **Docker Setup:**
   - Created a Dockerfile to set up an Nginx container.
   - Exposed port 80 and mapped it to port 3000 on the host.
   - Configured a volume to sync files between the host and container.
   - http://localhost:3000 for Docker

5. **Live Version:**
   - Deployed the website using GitHub Pages.
   - Live URL: https://it21915840.github.io/internship-fe-dinithi/

