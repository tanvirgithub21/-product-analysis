import React from 'react';
import './HomePage.css';

const imageLink = "https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large_2x.jpg";
const HomePage = () => {
    return (
        <div className='homePageWrap sidePd'>
            <div className="infoBox">
                <h1>Something Typing for one line</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, molestiae. Consectetur quo illum, fugit beatae tenetur cupiditate eveniet hic perferendis. Perspiciatis consectetur dignissimos soluta esse?</p>

                <button>See More</button>
            </div>
            <div className="imageBox">
                <img src={imageLink} alt="image" />
            </div>
        </div>
    );
};

export default HomePage;