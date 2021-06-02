import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faCodeBranch} from '@fortawesome/free-solid-svg-icons';

export default function HomeScreen({clickEvent}){

    const container = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100vh",
        padding: "30px",
        textAlign: 'justify',

    }

    const title = {
        color: "white",
        fontFamily: "monospace",
        fontWeight: "bold",
        margin: "10px",
        marginLeft: 0,
        marginRight: 0,
        fontSize: "35px",
        marginBottom: "40px",
        
    }

    const text = {
        color: "white",
        fontFamily: "sherif"
    }

    const link = {
        color: "white",
        fontFamily: "monospace"
    }

    const button = {
        backgroundColor: "#832e71",
        color: "white",
        padding: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        borderRadius: "10px"
    }   

    const textSection = {
        textAlign: "justify"
    }

    const textContaienr ={
        boxShadow: "2px 2px 30px #832e71",
        padding: "20px",
        borderRadius: "10px"
    }

    const mouseEnters = (e) => {
        let button = document.getElementById("start");
        button.style.boxShadow = "inset 2px 2px 10px #16171d";
        button.style.cursor="pointer";

    }

    const mouseLeaves = (e) => {
        let button = document.getElementById("start");
        button.style.boxShadow = "none";
        button.style.backgroundColor = "#832e71";
    }

    return (
        <div style={container}>
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center" style={textContaienr}>
                    <h1 style={title}>Hi there!!</h1>
                    <div style={textSection}>
                        <p style={text}>This is <b>IMAGE TRANSLATOR</b> which you can use to get translations for your images.
                            With this application, you will be able to add an image of something and get the translated
                            words for that something. For example, let's say you see a bird, but you do not know the type 
                            of that bird, in that case you can take a picture of that bird and use this web application to get 
                            the name of that bird with the desired languages. As of now, I have developed this applicatin only to
                            use Sinhala or Tamil with English, but in future this will be updated to use almost any language. 
                        </p>
                        <p style={text}>Hi I am Hashan the developer of this web application, this project is completely free you can get the source code for free.
                            And contact me through my email if you have anything to say. :)
                        </p>
                    </div>
                    <p style={link}>git/HidiAlgo/imageTranslator <FontAwesomeIcon icon={faCodeBranch} /> </p>
                        <p style={link}>hashan.mahesh01@gmail.com <FontAwesomeIcon icon={faEnvelope} /></p>
                    <div style={button} onClick={() => clickEvent(true)} id="start" onMouseEnter={mouseEnters} onMouseOut={mouseLeaves}>
                        Let's start
                    </div>
                </div>

                <div className="col-md-3"></div>
            </div>

        </div>
    );
}