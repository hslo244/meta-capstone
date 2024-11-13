import { CallToAction } from "./CallToAction";
import { Specials } from "./Specials";
import { CustomersSay } from "./CustomersSay";
import { About } from "./About";
import { Footer } from "./Footer";
import './Main.css';

export function Main() {
    return(
        <>
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
            <About/>
            <Footer/>
        </>
    )
}