import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import useLodeData from '../CustomHooks/useLodeData/useLodeData';
import Dashboard from '../Dashboard/Dashboard';
import './HomePage.css';

const imageLink = "https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large_2x.jpg";
const HomePage = () => {

    const { x , y} = useNavigate()
    console.log(y)

    const [users] = useLodeData();

    return (
            <div>
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

                <div className='someReviewsBox sidePd'>
                        <h1>Customer Reviews</h1>
                    <div className="someReviews">
                    {
                        // <SomeReviews users={users}/>
                        users.slice(0, 3).map(user => <Card user={user} key={user.id}/>)
                    }
                    </div>

                    <div className='seeallbtn'>
                        <Link className='btn' to="/dashboard" element={<Dashboard/>}>See All Reviews</Link>
                    </div>
                </div>

        </div>


        
    );
};

export default HomePage;