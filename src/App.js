import './App.css';

import {useState, useEffect} from 'react';

import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

import LoadingScreen from './screens/LoadingScreen';
import MainScreen from './screens/MainScreen';
import PredictionScreen from './screens/PredictionScreen';
import HomeScreen from './screens/HomeScreen';



function App() {

  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [translations, setTranslations] = useState(null)
  const [enter, setEnter] = useState(false);

  const loadModel = async () => {
    await tf.ready()
    const tensorflowModel = await mobilenet.load();
    setModel(tensorflowModel);
  }

  useEffect(() => {
    loadModel();
  }, [])

  const predict = async (language) => {
    const prediction = await model.classify(image);
    setPredictions(prediction);
    getTranslation(language);
  }

  const getTranslation = (language) => {
    if(language === "si"){
      setTranslations(["පළමු අනාවැකිය", "දෙවන අනාවැකිය", "තෙවන අනාවැකිය"]);
    }
    else{
      setTranslations(["முதல் கணிப்பு", "இரண்டாவது கணிப்பு", "மூன்றாவது கணிப்பு"]);
    }
  }

  if(model === null) return <LoadingScreen />

  else if (translations!==null && predictions !== null) return <PredictionScreen 
              originalPredictions={predictions} 
              translations={translations} 
              reset = {setPredictions}/>
  else  if (enter) return <MainScreen imageForPreditions = {setImage} setPrediction={predict}/>

  else return <HomeScreen clickEvent={setEnter}/>

}

export default App;
