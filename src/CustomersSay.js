import './CustomersSay.css'
import Restaurant from './restaurant.jpg'

export function CustomersSay() {
    return(
        <>
            <div class="testim">
                <h1 class="testim">Testimonials</h1>
                {/* <button type="button">Online Menu</button> */}
                <div class ='testim2'>
                    <div class='showcase'>
                        <div class='person'>
                            <h2 class='person'>Lemon</h2>
                                <div class='nestedPerson'>
                                    <img src={Restaurant} alt='Place' class="placeImg"/>
                                    <p class='rating'>5 stars</p>
                                </div>
                            <p class="person">Amazing food!
                            </p>
                        </div>
                        <div class='person'>
                            <h2 class='person'>Lemon</h2>
                                <div class='nestedPerson'>
                                    <img src={Restaurant} alt='Place' class="placeImg"/>
                                    <p class='rating'>5 stars</p>
                                </div>
                            <p class="person">Amazing food!
                            </p>
                        </div>
                        <div class='person'>
                            <h2 class='person'>Lemon</h2>
                                <div class='nestedPerson'>
                                    <img src={Restaurant} alt='Place' class="placeImg"/>
                                    <p class='rating'>5 stars</p>
                                </div>
                            <p class="person">Amazing food!
                            </p>
                        </div>
                        <div class='person'>
                            <h2 class='person'>Lemon</h2>
                                <div class='nestedPerson'>
                                    <img src={Restaurant} alt='Place' class="placeImg"/>
                                    <p class='rating'>5 stars</p>
                                </div>
                            <p class="person">Amazing food!
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}