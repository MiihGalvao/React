import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root");

function Inicio(props){
    function handleClickAno(){
        alert(props.ano);
    }
        
    const hello = (
            <>
                <h1 onClick={handleClickAno}>Hello World in { props.ano }!</h1>
                <p>{ props.estarLogado ? 'Você está logado' : 'Você não está logado' }</p>
            </>);

    return hello;
}

function Layout(props){
    return <div id="layout">
        {props.children}
    </div>;
}

function Alunos(){
    const alunos = ['Barão','Bee','Cadu','Sayuri'];
    const elAlunos = alunos.map((aluno, index) => <li key={index}>{aluno}</li>);

    return (
        <ul>
            {elAlunos}
        </ul>
    )
}

function App(){
    return (
    <Layout>
        <Inicio ano={2022} estarLogado={false} />
        <Alunos />
    </Layout>);
}

ReactDOM.render(<App />, root);
