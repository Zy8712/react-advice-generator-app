import React, { useRef } from 'react';
import diceIcon from './assets/icon-dice.svg';
import './App.css';

function DiceButton({ onClick, disabled }) {
    const diceIconRef = useRef(null); // Create a useRef for the dice icon

    return (
        <div className="w-full absolute -bottom-16 block flex justify-center">
            <button
                id="random-advice-button"
                className="flex flex-col justify-center items-center rounded-full p-5 border-none"
                onClick={onClick}
                disabled={disabled}
            >
                <img ref={diceIconRef} src={diceIcon} alt="dice_icon" /> {/* Attach the ref */}
            </button>
        </div>
    );
}

export default DiceButton;
