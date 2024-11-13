import { CallToAction } from "./CallToAction";
import { Specials } from "./Specials";
import { CustomersSay } from "./CustomersSay";
import { About } from "./About";
import { Footer } from "./Footer";

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