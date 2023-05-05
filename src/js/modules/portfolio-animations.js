import portfolio from '../../portfolio.json';

const iconsClassNames = portfolio.map(project => project.id);

let previousY = window.scrollY;
export const handlePortfolioAnimations = (isScrollingDown) => {
    // const isScrollingDown = window.scrollY > previousY;
    // console.log(isScrollingDown)
    for (const iconClassName of iconsClassNames) {
        const element = document.querySelector(`.${iconClassName}`);

        if (!element) {
            return;
        }

        switch (iconClassName) {
            case "ben-jerry":
                animateElement(element, "bounce", "right");
                break;
            case "skoda":
                // todo
                // animateElement(element, "rotate", "left");
                break;
        }
    }
}

const animateElement = (element, firstAnimation, hideDirection) => {
    const {y, height} = element.getBoundingClientRect();
    const elementCenter = y + height / 2; // center of element is decreasing when scrolling down
    const screenCenter = window.innerHeight / 2;
    const elementParent = element.parentElement;
    const shouldHide = elementCenter <= screenCenter;

    let interval;
    if (shouldHide) {
        if (!element.classList.contains(`animation--${firstAnimation}`) && !element.classList.contains('animation--slide-x')) {
            const behindRightScreenEdge = window.innerWidth - elementParent.getBoundingClientRect().right;
            element.style.setProperty('--translate-x', `${behindRightScreenEdge}px`);

            // First animation
            const bounceDuration = 1000;
            element.classList.add(`animation--${firstAnimation}`)

            // Slide right
            interval = setTimeout(() => {
                element.classList.add('animation--slide-x')
            }, bounceDuration + 100);
        }
    } else {
        if (interval) {
            clearTimeout(interval);
        }
        element.classList.remove(`animation--${firstAnimation}`)
        element.classList.remove('animation--slide-x')
    }
}
