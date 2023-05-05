import portfolio from '../../portfolio.json';

const iconsClassNames = portfolio.map(project => project.id);

let previousY = window.scrollY;
export const handlePortfolioAnimations = (isScrollingDown) => {
    // const isScrollingDown = window.scrollY > previousY;
    console.log(isScrollingDown)
    for (const iconClassName of iconsClassNames) {
        const element = document.querySelector(`.${iconClassName}`);

        if (!element) {
            return;
        }

        const elementCenter = element.getBoundingClientRect().y + element.getBoundingClientRect().height / 2;
        const shouldStartAnimation = elementCenter === window.innerHeight / 2;

        switch (iconClassName) {
            case "ben-jerry":
                element.classList.toggle('animation--slide-right', shouldStartAnimation)
                animateBenJerry(element);
        }
    }
}

const animateBenJerry = (element) => {
    // console.log(element)
}
