// This is the About section component
import './About.css';
import Restaurant from './restaurant.jpg'

export function About() {
    return(
        <section class='about'>
            <div class='about'>
                <div class='about1'>
                    <h1 class='about'>Little Lemon</h1>
                    <h2 class='about'>Chicago</h2>
                    <p class='about'>Voluptate qui id culpa est cillum nulla enim nulla exercitation dolor do. Nostrud exercitation tempor veniam officia. In proident reprehenderit veniam enim voluptate. In officia eiusmod qui esse nostrud est cupidatat nisi consequat quis proident magna. Dolor veniam est ad aute sunt adipisicing. Sit deserunt proident ipsum ea in.</p>
                </div>
                <div class='aboutImg'>
                    <img src={Restaurant} alt='Place' class="aboutImg"/>
                </div>
            </div>
        </section>
    );
};