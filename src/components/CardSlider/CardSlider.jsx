import React, { useState } from "react";
import '../Component.css'

const CardSlider = ({ cards }) => {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    //card-next button func
    const handleNextCard = () => {
        console.log("300523: handleNext");
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    //card-prev button func
    const handlePrevCard = () => {
        console.log("300523: handlePrev");
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    }

    return (
        <div className="card-slider">
            <div className="card-slider-wrapper">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${index === currentCardIndex ? 'active' : ''}`}
                    >
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className="card-slider-button">
                <button className="card-slider-press" onClick={handlePrevCard}></button>
                <button className="card-slider-press" onClick={handleNextCard}></button>
            </div>
        </div>
    );
}

export default CardSlider;