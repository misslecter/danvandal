import {handleJumbotronAnimations} from "./modules/jumbotron";
import {handleAboutAnimation} from "./modules/about";
import {handleConnectAnimations} from "./modules/connect";
import "./modules/portfolio";

window.addEventListener('scroll', () => {
    handleJumbotronAnimations()
    handleAboutAnimation()
    handleConnectAnimations()
})
