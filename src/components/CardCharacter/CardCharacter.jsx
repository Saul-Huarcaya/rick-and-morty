import "./CardCharacter.css";

function CardCharacter({character}){
    
    return(
        <>
            {character.map((personaje)=>
                <div className="card-character" key={personaje.id}>
                    <img src={personaje.image} alt={personaje.name} />
                    <div className="container-name">
                    <h2 className="name">{personaje.name}</h2>
                    </div>
                    <div className="datos">
                        <div className="row">
                            <p className="estado">Estado: </p>
                            <p>{personaje.status}</p>
                        </div>
                        <div className="row">
                            <p className="especie">Estado: </p>
                            <p>{personaje.species}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default CardCharacter;