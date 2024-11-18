import './CallToAction.css';
import { Link } from 'react-router-dom';
import './Specials.css';
import Dessert from './lemon dessert.jpg';
import Chef1 from './chefHoldingFood.jpg'

export function CallToAction() {
    return(
        <>
        <div class='sTitle'>
            <h1 class = 'intro'>Little Lemon</h1>
            <h2 class="intro">Chicago</h2>
            <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla diam vel lectus commodo rutrum. Sed orci neque, efficitur a commodo sollicitudin, ornare in lectus. </p>
            <Link to='/booking'><button className='CTA'>Reserve Now</button></Link>
        </div>
        <div class='chef'>
            <img src={Chef1} alt='Banner image' class="bannerImg"/>
        </div>
        <div class="specials">
            <div class = 'sTitle'>
                <h1 class="specials">Specials</h1>
                <Link to='/booking'><button className='menu1'>Menu</button></Link>
            </div>
                
                
                <div class='showcase'>
                    <div class='item'>
                        <img src={Dessert} alt='Dessert' class="itemImg"/>
                        <h1>Lemon</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis turpis vel sodales imperdiet. Ut tristique eget sapien ut vehicula. Fusce eget ipsum sed massa efficitur tincidunt. Maecenas fermentum pulvinar ipsum et aliquam. Mauris suscipit nec massa ut ultrices. Donec mattis sed neque ut convallis. Vivamus gravida fringilla ipsum, id ultricies tellus dignissim et. Maecenas magna lacus, faucibus ac turpis elementum, lacinia placerat enim. Morbi quis sapien tincidunt, dignissim lorem in, aliquet nisi. Cras condimentum ante eu pretium vulputate.
                        </p>
                    </div>
                    <div class='item'>
                        <img src={Dessert} alt='Dessert' class="itemImg"/>
                        <h1>Lemon</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis turpis vel sodales imperdiet. Ut tristique eget sapien ut vehicula. Fusce eget ipsum sed massa efficitur tincidunt. Maecenas fermentum pulvinar ipsum et aliquam. Mauris suscipit nec massa ut ultrices. Donec mattis sed neque ut convallis. Vivamus gravida fringilla ipsum, id ultricies tellus dignissim et. Maecenas magna lacus, faucibus ac turpis elementum, lacinia placerat enim. Morbi quis sapien tincidunt, dignissim lorem in, aliquet nisi. Cras condimentum ante eu pretium vulputate.
                        </p>
                    </div>
                    <div class='item'>
                        <img src={Dessert} alt='Dessert' class="itemImg"/>
                        <h1>Lemon</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis turpis vel sodales imperdiet. Ut tristique eget sapien ut vehicula. Fusce eget ipsum sed massa efficitur tincidunt. Maecenas fermentum pulvinar ipsum et aliquam. Mauris suscipit nec massa ut ultrices. Donec mattis sed neque ut convallis. Vivamus gravida fringilla ipsum, id ultricies tellus dignissim et. Maecenas magna lacus, faucibus ac turpis elementum, lacinia placerat enim. Morbi quis sapien tincidunt, dignissim lorem in, aliquet nisi. Cras condimentum ante eu pretium vulputate.
                    </p>
                    </div>
                </div>
            </div>    
        </>
    );
}