import React, { useState } from 'react'
import LanguageButton from '../components/LanguageButton'
import SelectImage from '../components/SelectImage'


const styles={
    marginTop: "5%"
  }

export default function LoadingScreen({imageForPreditions, setPrediction}){

    const [imageSelected, setImageSelected] = useState(false)

    const languageButtons = {
        padding: "25px"
    }

    const noticeText = {
        width: "100%",
        textAlign: "center",
        fontFamily: "monospace",
        color: 'gray',
        marginTop: "15px"
    }

    const imageChoosen = (image) => {
        console.log("IMAGE CHOOSEN")
        imageForPreditions(image);
        setImageSelected(true);
    }

    return (
        <div className="container">
            <div className="row" style={styles}>
                <div className="col-12">
                    <SelectImage imageForPreditions={imageChoosen}/>
                </div>
                <div className="col-12">
                {imageSelected && 
                    <div className="row">
                        <div className="col-6" style={languageButtons}>
                            <LanguageButton text="සිංහල" color="#4d5976" setPrediction={setPrediction} language="si"/>
                        </div>
                        <div className="col-6" style={languageButtons}>
                            <LanguageButton text="தமிழ்" color="#5f7936" setPrediction={setPrediction} language="ta"/>
                        </div>
                    </div>
                }{!imageSelected &&
                
                    <div style={noticeText}>
                        BROWSE OR DRAG AND DROP AN IMAGE
                    </div>

                }
                </div>
            </div>
        </div>
    );
    
}