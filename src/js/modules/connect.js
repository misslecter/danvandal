const viewportHeight = window.innerHeight;
const connect = document.querySelector("[data-js-selector=\"connect\"]");

// Ruka
const hand = document.querySelector("[data-js-selector=\"ruka\"]");
const handDefaultXPosition = hand.getBoundingClientRect().x;

// Kopytko
const hoof = document.querySelector("[data-js-selector=\"kopytko\"]");
const hoofDefaultXPosition = hand.getBoundingClientRect().x;

// Hvezdicka
const star = document.querySelector("[data-js-selector=\"star\"]");

export const handleConnectAnimations = () => {
    const sectionBottom = connect.getBoundingClientRect().bottom - viewportHeight
    const percentageY = 100 - Math.min(Math.max(sectionBottom * 100 / connect.getBoundingClientRect().height, 0), 100);
    const touched = percentageY === 100;

    // Ruka
    const handCurrentXpx = handDefaultXPosition - (handDefaultXPosition * percentageY / 100);
    hand.style.transform = `translateX(${handCurrentXpx}px)`;

    // Kopytko
    const hoofCurrentXpx = Math.abs(hoofDefaultXPosition * percentageY / 100);
    hoof.style.transform = `translateX(${Math.abs(hoofDefaultXPosition) - hoofCurrentXpx}px)`;

    // Hvezdicka
    if (star) {
        star.style.display = touched ? 'block' : 'none';
    }
    // todo: show 2x then hide

    [hand, hoof].forEach(part => part.style.position = touched ? 'absolute' : 'fixed')
}
