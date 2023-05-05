import {handleJumbotronAnimations} from "./modules/jumbotron";
import {handleAboutAnimation} from "./modules/about";
import {handleConnectAnimations} from "./modules/connect";
import "./modules/portfolio";
import {handlePortfolioAnimations} from "./modules/portfolio-animations";

let previousY = window.scrollY;
window.addEventListener('scroll', () => {
    handleJumbotronAnimations()
    handleAboutAnimation()
    handleConnectAnimations()
    handlePortfolioAnimations(window.scrollY > previousY)

    previousY = window.scrollY;
})
