import "./Home.css";
import { useEffect, useState } from 'react';
import "../Paginacion/Paginacion.css";
import CardCharacter from '../CardCharacter/CardCharacter';
import Paginacion from '../Paginacion/Paginacion';

function Home(){
    const [character,setCharacter] = useState([]);
    const [info,setInfo] = useState({});
    const [pagina,setPagina] = useState(1);
    
    const url = `https://rickandmortyapi.com/api/character/`;

    const fetchCharacters = (url) =>{
        const peticion = fetch(url);
        peticion.then((data)=>data.json())
        .then((res)=>{
            setInfo(res.info);
            setCharacter(res.results);
        })
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        fetchCharacters(url);
    },[]);

    const onPrev = () =>{
        setPagina(pagina - 1);
        fetchCharacters(info.prev)
    }

    const onNext = () =>{
        setPagina(pagina + 1);
        fetchCharacters(info.next);
    }

    return (<>
        <div className="header">
            <h1 className="title-app">Rick and Morty</h1>
        </div>
        <div className='container'>
            <Paginacion onPrev={onPrev} onNext={onNext} info={info} pagina={pagina} ubicacion="end"/>
                <div className='main'>
                    <CardCharacter character={character}/>
                </div>
            <Paginacion onPrev={onPrev} onNext={onNext} info={info} pagina={pagina} ubicacion="center"/>
        </div>
    </>)
}
export default Home;