import React from 'react';
import './Card.css';

const Card = (test) => {
    console.log(test);
    return (
        <div className="card-container">
            <div className="card_img-container">
                <img src={test.urlPic} alt={test.altPic} />
            </div>
            <div className="classic">
                {test.name}
            </div>
            <div div className="explore">EXPLORE</div>
        </div>
    );
};

export default Card;