import React from "react";
import ReactDOM from "react-dom/client";

// Header
//  - Logo
//  - Navbar
// Body
//  - Search
//  - RestaurantContainer
//      - RestaurantCard
//          - Img
//          - Name od Res, Star Rating, cuisine, delivery time
// Footer
//  - Copyright
//  - Likes
//  - Address
//  - Contact

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png2.cleanpng.com/sh/cebb9306ec4e158041120cd7ead0e5f7/L0KzQYm3WcE6N6l4kZH0aYP2gLBuTgNmeqdue9c2YoLkfrW0gB9ueJJzkZ9sbHnzPbL5lL1nd5DpRdV4boTkc8W0lgMueJpzgAc2Z4XzhLK0gB9wc15mhtY2Y3H3dcP6TcVjaWQ2SNcANXGzQoGBTsk4OGg7SKI8MUW2R4W4U8M1QWQ7UKk3cH7q/kisspng-service-brand-company-clip-art-food-contact-us-pinku-gupta-cook-and-caters-5ba310e55a0208.9707600315374133493687.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {

    const { resData } = props;

    console.log(resData)
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={resData.img} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines}</h4>
            <h4>{resData.rating} stars</h4>
            <h4>{resData.time} minutes</h4>
        </div>
    );
}

const resObj = [
    {
        id: 1,
        name: "Jaggi Sweets",
        cuisines: "Bakery, Desserts",
        rating: "4.4",
        time: "38",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rtjayyehxc4e4v7lja6d"
    },
    {
        id: 2,
        name: "Gopal Sweets",
        cuisines: "Bakery, Desserts",
        rating: "4.4",
        time: "38",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c61490e71b2240ada6869495cee0437a"
    },
    {
        id: 3,
        name: "Malhotra Sweets",
        cuisines: "Bakery, Desserts",
        rating: "4.4",
        time: "38",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b365b9e8cb5cd93f4769655b3c97e555"
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);