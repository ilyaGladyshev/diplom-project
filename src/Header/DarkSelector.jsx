import React, { useState } from 'react';
import white from "../assets/images/background/white-background.jpg";
import black from "../assets/images/background/dark-background.jpg"

const DarkSelector = () => {
    const [thema, setThema] = useState(0);
    const images = [
        black,      
        white,  
    ];  

    const fontColors = [
        "aqua",      
        "black",  
    ];

    const gradients = [
        "linear-gradient(45deg, rgb(124, 146, 141), rgb(56, 73, 73), rgb(9, 9, 9))",          
        "linear-gradient(45deg, rgb(235, 247, 245), rgb(225, 254, 255), rgb(239, 244, 210))",  
    ];

    const changeThema = () => {
        const wrapper = document.getElementById('wrapper');
        const canvas = document.getElementById('canvas');
        if (thema===0) {
            setThema(1);
        } else {
            setThema(0);
        }
        const newImage = images[thema];
        canvas.style.background = gradients[thema];
        wrapper.style.backgroundImage = `url(${newImage})`;
        wrapper.style.color = fontColors[thema];
        wrapper.style.transition = 'background-image 1.2s ease-in-out';
        canvas.style.transition = 'background-image 1.2s ease-in-out';       
    }

    return (
        <div>
            <button type='button' onClick={changeThema}>Переключатель тем</button>
        </div>
    )
}

export default  DarkSelector;