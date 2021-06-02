import './App.css';
import image from './assets/dog.jpg'

import {useState, useEffect} from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

import axios from 'axios';


function App() {
  
  const [prediction, setPrediction] = useState("Loading...");
  const [model, setModel] = useState(null);

  const getTranslation = () => {
    const response = axios
      .post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: "Welcome",
            target: "si",
            key: "AIzaSyDBa4heZPpSqgNcb8wff3Rvejm9SgVb4Tw"
          }
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log('rest api error', err);
      });
  }

  const loadModel = async () => {

      await tf.ready();
      const model = await mobilenet.load()
      setModel(model);


      const img = document.getElementById("image");
      const prediction = await model.classify(img);
      setPrediction("DONE");
      console.log(prediction);
      getTranslation()
  }

  useEffect(() => {
    loadModel();
  }, [prediction])


  return (
    <div className="App">
      <img src={image} alt="image" id="image"/>
      <h1>Prediction {prediction}</h1>
    </div>
  );
}

export default App;
