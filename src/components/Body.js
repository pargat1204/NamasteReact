/* Body.js */

import Restaurant from "./Restaurant";
import '../css/Body.css';

const Body = () => {

    const res = [];

    return (
        <div className="body-container">
            <Restaurant restaurants={res}/>
        </div>
    );
}

export default Body;