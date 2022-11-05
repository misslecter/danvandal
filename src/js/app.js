import {isTouchDevice} from "./isMobile";

const viewportHeight = window.innerHeight;

// Centaur
const centaur = document.querySelector("[data-js-selector=\"centaur\"]");
const centaurTargetXPosition = -(window.innerWidth / 2);
const centaurTargetYPosition = viewportHeight * 0.2;
const centaurTargetScale = 0.5;

// Heading
const heading = document.querySelector("[data-js-selector=\"heading\"]");
const headingTargetXPosition = window.innerWidth / 2;
const headingTargetYPosition = -(heading.getBoundingClientRect().height);

// Subheading
const subheading = document.querySelector("[data-js-selector=\"subheading\"]");
const subheadingTargetXPosition = window.innerWidth / 2;
const subheadingTargetYPosition = viewportHeight * 0.3;

// Logo
const logo = document.querySelector("[data-js-selector=\"logo\"]");
// const logoBoundingRect = logo.getBoundingClientRect();
const logoTargetXPosition = 0;
const logoTargetYPosition = 0;
const logoTargetScale = 1;

const logoDefaultXpx = window.innerWidth / 2 + 60;
const logoDefaultYpx = viewportHeight / 2 - 64;
const logoDefaultScale = 2.2;
logo.style.transform = `translateX(${logoDefaultXpx}px) translateY(${logoDefaultYpx}px) scale(${logoDefaultScale})`;

// Apply default rotations
const defaultRotation = `rotate(-11deg)`;

// if (!isTouchDevice) {
window.addEventListener('scroll', (e) => {
    const percentageY = Math.min(window.scrollY * 100 / viewportHeight, 100);

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

    // Logo
    const logoCurrentXpx = logoDefaultXpx - (percentageY * (logoDefaultXpx - logoTargetXPosition) / 100);
    const logoCurrentYpx = logoDefaultYpx - (percentageY * (logoDefaultYpx - logoTargetYPosition) / 100);
    const logoCurrentScale = logoDefaultScale - (percentageY * (logoDefaultScale - logoTargetScale) / 100);
    logo.style.transform = `translateX(${logoCurrentXpx}px) translateY(${logoCurrentYpx}px) scale(${logoCurrentScale})`;

})
// }


