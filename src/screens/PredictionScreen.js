import React from 'react'

export default function PredictionScreen({originalPredictions, translations, reset}){

    const tableStyle = {
        width: '100%',
        padding: "30px"
    }

    const container = {
        boxSizing: 'border-box',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: "100vh"
    }

    const tableTitle = {
        fontFamily: "monospace",
        fontSize: "15px",
        color: "#478DFF",
        textAlign: 'start'
    }
    
    const translatedText = {
        fontWeight: 'bold',
        margin: 0,
        fontSize: '25px',
        color: 'white'
    }

    const originalText = {
        color: "gray",
        fontFamily: 'monospace',
        fontSize: "20px",
    }   

    const probabilityText = {
        fontWeight: "bold",
        fontSize: "30px",
        textAlign: 'center',
        color: "#D4786C"
    }

    const retryButton = {
        width: "100%",
        backgroundColor: "green",
        textAlign: "center",
        marginTop: "20px",
        padding: "10px",
        borderRadius: "10px",
        fontFamily: "monospace",
        fontSize: "20px",
        color: "white",
        fontWeight: 'bold',
        fontFamily: 'monospace'

    }

    const mouseEnters = (e) => {
        let button = document.getElementById("retry");
        button.style.boxShadow = "inset 2px 2px 10px #16171d";
        button.style.cursor="pointer";

    }

    const mouseLeaves = (e) => {
        let button = document.getElementById("retry");
        button.style.boxShadow = "none";
        button.style.backgroundColor = "green";
    }



    return (
        <div style={container}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={tableTitle}>PREDICTION</th>
                            <th style={tableTitle}>PROBABILITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p style={translatedText} >{translations[0]}</p>
                                <p style={originalText}>{originalPredictions[0].className}</p>
                            </td>
                            <td style={probabilityText}>{(originalPredictions[0].probability.toFixed(2))*100}%</td>
                        </tr>
                        <tr>
                            <td>
                                <p style={translatedText}>{translations[1]}</p>
                                <p style={originalText}>{originalPredictions[1].className}</p>
                            </td>
                            <td style={probabilityText}>{(originalPredictions[1].probability.toFixed(2))*100}%</td>
                        </tr>
                        <tr>
                            <td>
                                <p style={translatedText}>{translations[2]}</p>
                                <p style={originalText}>{originalPredictions[2].className}</p>
                            </td>
                            <td style={probabilityText}>{(originalPredictions[2].probability.toFixed(2))*100}%</td>
                        </tr>
                    </tbody>
                </table>
                <div 
                    style={retryButton} 
                    onClick={() => reset(null)}
                    onMouseEnter={mouseEnters}
                    onMouseOut={mouseLeaves}
                    id="retry"
                >
                    RETRY
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
    
}