import React from "react";
import doSearch from "./busquedaElement";

function CabeceraDos(){
    return(

        <div id="encima-tabla">
            <label for="username">Alumnos</label>
            <input type="text" id="searchTerm" placeholder=" Buscar por Nombre, Email o Palabra clave..." onkeyup='<doSearch/>'/>
            <button type="=button"> Añadir Alumno</button>
            <doSearch/>
        </div>
        
    )

}


export default CabeceraDos