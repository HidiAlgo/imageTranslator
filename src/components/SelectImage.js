import React, { useEffect, useRef, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

export default function SelectImage({imageForPreditions}){

    const inputImage = useRef(null);
    const[image, setImage] = useState(null);
    const [info, setInfo] = useState("SELECT A PHOTO")

    const containerBefore = {
        backgroundColor: "#16171d",
        height: "80vh",
        borderRadius: "20px",
        padding: "30px",
        overflow: "hidden"
        
    }

    const containerAfter = {
        height: "80vh",
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden"
    }

    const innerContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%", height: "100%",
        borderRadius: "40px",
        borderStyle: "dashed"
    }

    const imageConainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 2,
        position: "absolute"
    }

    const imageStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        filter: "drop-shadow(8px 8px 20px gray)"
    }

    const imageBackground = {
        width: "100%",
        height: "100%",
        position: 'absolute',
        backgroundImage: `url(${image})`,
        filter: 'blur(8px)',

        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
    }
    const text = {
        justifySelf: 'flex-start', 
        fontFamily: 'monospace'
    }

    const onButtonClick = () => {
       inputImage.current.click();
    };

    const handleFileUpload = e => {
        const { files } = e.target;
        setImage(URL.createObjectURL(files[0]));
    };


    const dragOver = (e) => {
        e.preventDefault();
        if (e.target.id === "image-container"){
            let imageContainer = document.getElementById("image-container");
            imageContainer.style.backgroundColor = "#1d1f26";
        }
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
        if (e.target.id === "image-container"){
            let imageContainer = document.getElementById("image-container");
            imageContainer.style.backgroundColor = "#16171d";
        }
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];

        if (validTypes.indexOf(files[0].type) !== -1) {
            setImage(URL.createObjectURL(files[0]));
        }else{
            setInfo("INVALID FILE TYPE");
            let imageContainer = document.getElementById("image-container");
            imageContainer.style.backgroundColor = "#16171d";
        }
    }



    useEffect(() => {
        if (image !== null) imageForPreditions(document.getElementById("image"))
    }, [image])

    return (
        <div className="" style={image ? containerAfter : containerBefore}>
            {image && 
                <div style={imageBackground}></div>
            }
            {!image && 
                <div id="image-container"
                style={innerContainer} onClick={onButtonClick}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                id="image-container"
                >
                    <FontAwesomeIcon icon={faCamera} size="6x"/>

                    <p style={text}>{info}</p>

                    <input type='file' 
                        id='file' 
                        ref={inputImage} 
                        style={{display: 'none'}} 
                        accept="image/*"
                        onChange={handleFileUpload}/>
                </div>
            }
            {image &&
                <div style={imageConainer} onClick={onButtonClick}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                >
                    <img src={image} style = {imageStyle} id="image"/>

                    <input type='file' 
                        id='file' 
                        ref={inputImage} 
                        style={{display: 'none'}} 
                        accept="image/*"
                        onChange={handleFileUpload}/>

                </div>
            }
        </div>
    );
    
}