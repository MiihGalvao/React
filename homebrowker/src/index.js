import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Descricao(){
    let [crypts, setCrypts] = React.useState(null);

    useEffect(()=>{
        fetch('https://api.wazirx.com/sapi/v1/tickers/24hr')
            .then (res => res.json())
            .then(data => setCrypts(data))
    },[]);


    
    return (
        !crypts ?
        <h1> Carregando </h1>
    :
    <>
        <p> {crypts[0].baseAsset}    </p>
        <p> {crypts[0].lastPrice}    </p>
    </>)
}


ReactDOM.render(
    <Descricao />, 
    document.getElementById('root'));