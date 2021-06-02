import React from 'react'

export default function LanguageButton({text, color, setPrediction, language}){

    const button ={
        backgroundColor: color,
        padding: "10px",
        borderRadius: "10px",
        textAlign: 'center',
        fontSize: '3vh',
        fontWeight: 'bold',
        color: "white",
        boxShadow: `2px 2px 10px black`
    }

    const buttonContainer = {

    }

    const mouseEnters = (e) => {
        let button = document.getElementById(language);
        button.style.boxShadow = "inset 2px 2px 10px #16171d";
        button.style.cursor="pointer";

    }

    const mouseLeaves = (e) => {
        let button = document.getElementById(language);
        button.style.boxShadow = "none";
        button.style.backgroundColor = color;
    }

    return (
        <div style={buttonContainer} onClick={() => {setPrediction(language)}}>
            <div style={button} id={language}
                onMouseEnter={mouseEnters}
                onMouseOut={mouseLeaves}
            >
                {text}
            </div>
        </div>
    );
    
}