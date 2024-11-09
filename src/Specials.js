import './Specials.css';
import Dessert from './lemon dessert.jpg';

export function Specials() {
    return(
        <>
            <div class="specials">
                <h1 class="specials">Specials</h1>
                <button type="menu1">Online Menu</button>
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