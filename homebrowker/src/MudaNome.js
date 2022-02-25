import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Descricao(){
    let [developer, setDeveloper] = React.useState({
        lang: "PHP",
        anos: 0,
        nome: "Thyago"
    });
    
    useEffect(()=>{
        document.title = developer.nome
        console.log("Rodou o Use Effect");
    },[]);


    function handleClickLinguagem(){
        setDeveloper({
            ...developer,
            lang: "JavaScript",
            anos: 0
        })
    }

    function handleChangeAnos(event){
        setDeveloper({
            ...developer,
            anos: event.target.value
        })
    }

    function handleChangeNome(event){
        setDeveloper({
            ...developer,
            nome: event.target.value
        })
    }
    
    return (<>
        <p>Eu sei {developer.lang}</p>
        <p>Trabalho com essa linguagem a {developer.anos} anos</p>
        <input type="number" onChange={handleChangeAnos}/>
        <input type="text" onChange={handleChangeNome} placeholder="Nome"/>
        <button onClick={handleClickLinguagem}>Alterar Linguagem</button>
    </>)
}



ReactDOM.render(
    <Descricao />, 
    document.getElementById('root'));