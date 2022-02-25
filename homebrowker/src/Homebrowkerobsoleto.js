import React from 'react';
import ReactDOM from 'react-dom';

const acoes = [{
    nome:"PETR4",
    preco: 3.50,
    cresc: -12.32
},
{
    nome:"OIBR4",
    preco: 0.17,
    cresc: -18
},
{
    nome:"CIEL4",
    preco: 0.05,
    cresc: -32
},
];


function Acao(props){
    return <div>{props.acao.nome} | {props.acao.preco} | {props.acao.cresc}</div>
}

function Acoes(){
    return acoes.map((acao, index) => {
       return <Acao acao={acao} />
    })
}

ReactDOM.render(
    <>
   <Acoes />
    </>,
    document.getElementById('root'));

