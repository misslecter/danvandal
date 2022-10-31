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

const logoCurrentXpx = window.innerWidth / 2 + 60;
const logoCurrentYpx = viewportHeight / 2 - 64;
const logoCurrentScale = 2.2;
logo.style.transform = `translateX(${logoCurrentXpx}px) translateY(${logoCurrentYpx}px) scale(${logoCurrentScale})`;


// Apply default rotations
const defaultRotation = `rotate(-11deg)`;

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

    // Logo

    // Keep on top
    // if (window.scrollY >= logoBoundingRect.top - 30) {
    //     logo.style.position = 'fixed'
    //     logo.style.top = `30px`
    // } else {
    //     logo.style.position = 'relative'
    //     logo.style.top = `0px`
    // }
    //
    // const logoCurrentXpx = Math.max(logoTargetXPosition, logoTargetXPosition * percentageY / 100);
    // const logoCurrentScale = 1 - (logoTargetScale * percentageY / 100);
    // logo.style.transform = `translateX(${logoCurrentXpx}px) scale(${logoCurrentScale}`;

    // todo
    // const logoCurrentXpx = logoTargetXPosition * percentageY / 100;
    // const logoCurrentYpx = logoTargetYPosition * percentageY / 100;
    // const logoCurrentScale = 1 - (logoTargetScale * percentageY / 100);
    // logo.style.transform = `translateX(${logoCurrentXpx}px) translateY(${logoCurrentYpx}px) scale(${logoCurrentScale})`;

})
