import React, { useState } from 'react';
import './style.css';

// Alternative ma lui capisce ugual modo
// const LoadingButton = (props) => {
//   const { onClick, loading, loader, label } = props;

const LoadingButton = (props) => {
  return (
    //il nostro bottone on click farà props.onClick
    <button onClick={props.onClick} type="button">
      {props.loading
      //props.loading inizialmente è falso se è
      // allora facciamo questo
      ? props.loader // oppure direttamente l'html 
      // se no questo
      : props.label}
    </button>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // all'inizio è tutto false 
  return (
    <>
      <LoadingButton
        loader = {<div className="loader" />}
        label= "Press me"
        // props.loading contiene isLoading javascript 
        loading={isLoading}
        // on click assegna il contrario di isloading che è true
        onClick={() => setIsLoading(!isLoading)}
      />
    </>
  );
}

export default App;
