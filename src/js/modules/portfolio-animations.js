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

        const elementParent = element.parentElement;
        const {x, y, height, width} = element.getBoundingClientRect();
        const elementCenter = y + height / 2; // center of element is decreasing when scrolling down
        const screenCenter = window.innerHeight / 2;
        const shouldHide = elementCenter <= screenCenter;

        switch (iconClassName) {
            case "ben-jerry":
                let interval;
                if (shouldHide) {
                    if (!element.classList.contains('animation--bounce') && !element.classList.contains('animation--slide-x')) {
                        const behindRightScreenEdge = window.innerWidth - elementParent.getBoundingClientRect().right;
                        element.style.setProperty('--translate-x', `${behindRightScreenEdge}px`);

                        // Bounce
                        const bounceDuration = 1000;
                        element.classList.add('animation--bounce')

                        // Slide right
                        interval = setTimeout(() => {
                            element.classList.add('animation--slide-x')
                        }, bounceDuration + 100);
                    }
                } else {
                    if (interval) {
                        clearTimeout(interval);
                    }
                    element.classList.remove('animation--bounce')
                    element.classList.remove('animation--slide-x')
                }

                animateBenJerry(element);
        }
    }
}

const animateBenJerry = (element) => {
    // console.log(element)
}
