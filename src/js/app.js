const centaur = document.querySelector("[data-js-selector=\"centaur\"]");
const heading = document.querySelector("[data-js-selector=\"heading\"]");
const subheading = document.querySelector("[data-js-selector=\"subheading\"]");

const viewportHeight = window.innerHeight;

// Centaur
const centaurTargetXPosition = -(window.innerWidth / 2);
const centaurTargetYPosition = viewportHeight * 0.2;
const centaurTargetScale = 0.5;

// Heading
const headingTargetXPosition = window.innerWidth / 2;
const headingTargetYPosition = -(heading.getBoundingClientRect().height);

// Subheading
const subheadingTargetXPosition = window.innerWidth / 2;
const subheadingTargetYPosition = viewportHeight * 0.3;

// Apply default rotations
const defaultRotation = `rotate(-15deg)`;

window.addEventListener('scroll', (e) => {
    const percentageY = window.scrollY * 100 / viewportHeight;

    // Centaur
    const centaurCurrentXpx = centaurTargetXPosition * percentageY / 100;
    const centaurCurrentYpx = centaurTargetYPosition * percentageY / 100;
    const centaurCurrentScale = 1 - (centaurTargetScale * percentageY / 100);
    centaur.style.transform = `translateX(${centaurCurrentXpx}px) translateY(${centaurCurrentYpx}px) scale(${centaurCurrentScale})`;

    // Heading
    const headingCurrentXpx = headingTargetXPosition * percentageY / 100;
    const headingCurrentYpx = headingTargetYPosition * percentageY / 100;
    heading.style.transform = `${defaultRotation} translateX(${headingCurrentXpx}px) translateY(${headingCurrentYpx}px)`;

    // Subheading
    const subheadingCurrentXpx = subheadingTargetXPosition * percentageY / 100;
    const subheadingCurrentYpx = subheadingTargetYPosition * percentageY / 100;
    subheading.style.transform = `${defaultRotation} translateX(${subheadingCurrentXpx}px) translateY(${subheadingCurrentYpx}px)`;

})
