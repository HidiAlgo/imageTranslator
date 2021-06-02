import React from 'react'
import Lottie from 'react-lottie';
import loadingAnimation from '../assets/loading.json';

export default function LoadingScreen(){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const styles={
        width: '100%', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center'
    }

    const loadingText = {
        color: "white",
        margin: "5px",
        fontFamily: "monospace",
        fontSize: "20px"
    }

    return (
    <div className="" style={styles}>
       <Lottie options={defaultOptions}
              height={200}
              width={200}/>
        <p style={loadingText}>Loading...</p>      
    </div>
    );
    
}