const about = document.querySelector("[data-js-selector=\"about\"]")
const aboutRect = about.getBoundingClientRect();

export const handleAboutAnimation = () => {
    about.classList.toggle('squash', window.scrollY > aboutRect.y)
}
