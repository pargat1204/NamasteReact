/* Restaurant.js */

import { useState, useEffect } from "react";
import { URL } from '../utils/mockData';
import Card from './Card';
import '../css/Restaurant.css';
import Shimmer from './Shimmer';
// import Search from "./Search";
import '../css/Filter.css';

const Restaurant = ({ restaurants }) => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const { search } = useState('');

    function sort(arr){
        arr.sort((a, b) => {
            const avgRatingA = parseFloat(a?.info?.avgRating);
            const avgRatingB = parseFloat(b?.info?.avgRating);

            if (avgRatingA < avgRatingB) {
                return 1;
            } else if (avgRatingA > avgRatingB) {
                return -1;
            } else {
                return 0;
            }
        });
        setListOfRestaurant(arr);
    }

    const handleSearch = (query) => {
        function filterRestaurants(restaurants, substring) {
            return restaurants.filter((restaurant) => {
                const info = restaurant?.info;
                if (substring && !isNaN(substring)) {
                    const avgRating = parseFloat(info.avgRating).toFixed(1);
                    substring = parseFloat(substring).toFixed(1);
                    return avgRating >= substring;
                }
                else {
                    const name = info?.name?.toLowerCase();
                    const cuisines = info?.cuisines?.map(cuisine => cuisine?.toLowerCase())?.join(' ');
                    const locality = info?.locality?.toLowerCase();
                    const substringLowerCase = substring?.toLowerCase();
                    // Check if any of the fields (name, cuisines, locality, or rating) contains the substring
                    return name?.includes(substringLowerCase) || cuisines?.includes(substringLowerCase) || locality?.includes(substringLowerCase);
                }
            });
        }

        const filteredRestaurants = filterRestaurants(restaurants, query);
        sort(filteredRestaurants);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(URL);

        const json = await data?.json();

        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach(element => {
            restaurants.push(element);
        });
        sort(restaurants);
    };


    const filters = (
        <div className="filter">
            <div className='filter-btns'>
                <div className="all-restaurants-btn">
                    <button className="button" onClick={() => {
                        sort(restaurants);
                    }}>
                        <span className="btn-text">All Restaurants</span>
                    </button>
                </div>
                <div className="refresh-restaurants-btn">
                    <button className="button" onClick={() => {
                        const r5 = restaurants.filter((res) => {
                            return res?.info?.avgRating > 4.0;
                        });
                        sort(r5);
                    }}>
                        <span className="btn-text">Top Rated Restaurants</span>
                    </button>
                </div>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => handleSearch(e?.target?.value)}
                />
            </div>
        </div>
    );

    return listOfRestaurant.length === 0 ? (
        <div>
            {filters}
            <Shimmer />
        </div>
    ) : (
        <div>
            {filters}
            <div className="restaurant-container">
                {listOfRestaurant.map((restaurant) => {
                    return (
                        <Card key={restaurant?.info?.id}
                            image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId}
                            name={restaurant?.info?.name}
                            cuisines={restaurant?.info?.cuisines?.join(", ")}
                            rating={restaurant?.info?.avgRating}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Restaurant;

