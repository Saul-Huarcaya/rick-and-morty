import "./Paginacion.css";

import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

function Paginacion({onNext,onPrev,info,pagina,ubicacion}){

    const HandlePrev = () =>{
        onPrev();
    }
    const HandleNext = () =>{
        onNext();
    }
    return(
        <div className="paginacion" style={{justifyContent:ubicacion}}>
            {info.prev? <GrCaretPrevious onClick={HandlePrev} className="btn">Atras</GrCaretPrevious> : null}
                <p><span>{pagina} - </span>{info.pages}</p>
            {info.next? <GrCaretNext onClick={HandleNext} className="btn">Next</GrCaretNext> :null}
        </div>
    )
}
export default Paginacion;