const viewportHeight = window.innerHeight;
const connect = document.querySelector("[data-js-selector=\"connect\"]");

// Ruka
const hand = document.querySelector("[data-js-selector=\"ruka\"]");
const handDefaultXPosition = hand.getBoundingClientRect().x;

// Kopytko
const hoof = document.querySelector("[data-js-selector=\"kopytko\"]");
const hoofDefaultXPosition = hand.getBoundingClientRect().x;

export const handleConnectAnimations = () => {
    const sectionBottom = connect.getBoundingClientRect().bottom - viewportHeight
    const percentageY = 100 - Math.min(Math.max(sectionBottom * 100 / connect.getBoundingClientRect().height, 0), 100);
    // console.log(percentageY)

    // Ruka
    const handCurrentXpx = handDefaultXPosition - (handDefaultXPosition * percentageY / 100);
    hand.style.transform = `translateX(${handCurrentXpx}px)`;

    // Kopytko
    const hoofCurrentXpx = Math.abs(hoofDefaultXPosition * percentageY / 100);
    hoof.style.transform = `translateX(${Math.abs(hoofDefaultXPosition) - hoofCurrentXpx}px)`;
}
