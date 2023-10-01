import '../css/Filter.css';

const FilterButtons = () => {
    return (
        <div className='filter-btns'>
            <button className="star-button" onClick={() => {
                const filteredRestaurant = restaurants.filter((res) => {
                    console.log(parseFloat(res.info.avgRating).toFixed(1));
                    return parseFloat(res.info.avgRating).toFixed(1) === 5.0;
                });
                setListOfRestaurant(filteredRestaurant);
            }}>
                <span className="star">&#9733;</span>
                <span className="number">5</span>
            </button>
            <button className="star-button" onClick={() => {
                const filteredRestaurant = restaurants.filter((res) => parseFloat(res.info.avgRating).toFixed(1) >= 4.0);
                setListOfRestaurant(filteredRestaurant);
            }}>
                <span className="star">&#9733;</span>
                <span className="number">4</span>
            </button>
            <button className="star-button" onClick={() => {
                const filteredRestaurant = restaurants.filter((res) => parseFloat(res.info.avgRating).toFixed(1) >= 3.0);
                setListOfRestaurant(filteredRestaurant);
            }}>
                <span className="star">&#9733;</span>
                <span className="number">3</span>
            </button>
            <div className="refresh-btn-container">
                <button className='refresh-btn' onClick={() => {
                    setListOfRestaurant(restaurants);
                }}>Refresh</button>
            </div>
        </div>
    );
}

export default FilterButtons;