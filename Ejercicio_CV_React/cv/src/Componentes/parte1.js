import React from "react";
import Retorno from "./retorno";


function Principal(){
    return(

        <div class="login-box">

        <Retorno/>
        
         <h1 class="nombreUsu">Nombre Alumno  </h1>
  
         <p class="hola">&#9762 Valencia | España </p>
        
  
        <form class="form-inline">
          {/* USERNAME INPUT */}

          <label for="nombreCompleto">Nombre y Apellidos</label>
          <input type="texto" placeholder="Nombre Alumno"/>
        </form>
  
        <form class="form-inline">
          <label for="Nº Telefono">Nº Telefono</label><label for="Email">Email</label><input type="text" class="form-control"/> <input type="text" class="form-control"/>
        </form>
  
        <form class="form-inline">
          <label for="Pais">Pais</label>
          <label for="Ciudad">Ciudad</label>
  
          <select name="paises" id="paises">
            <option value="españa">España</option>
            <option value="portugal">Portugal</option>
            <option value="francia">Francia</option>
            <option value="marruecos">Marruecos</option>
          </select>
          
          <select name="ciudades" id="ciudades">
            <option value="badajoz">Badajoz</option>
            <option value="malaga">Malaga</option>
            <option value="sevilla">Sevilla</option>
            <option value="valencia">Valencia</option>
          </select>
        </form>
  
  
        <form class="form-inline">
          <label for="Traslado">Traslado</label>
          <label for="Presencialidad">Presencialidad</label>
  
          <select name="Traslados" id="Traslados">
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          
          <select name="Presencialidads" id="Presencialidads">
            <option value="enRemoto">En remoto</option>
            <option value="presencial">Presencial</option>
          </select>
        </form>
  
  
  
        <form class="form-inline">
          <label for="Documento">Documento CV</label>
          <input type="button"name="Documento" value=" Subir de nuevo" class="form-control"/>
          <input type="submit" class="form-control" value=" Borrar"/>
        </form>
  
        <label for="etiqueta">Etiquetas</label>
        <form class="form-inline">
          
  
          <select name="etiquetaEspe" id="etiquetaEspe">
            <option value="HTML&CSS" >Escribe para buscar</option>
            <option value="HTML&CSS">HTML&CSS</option>
            <option value="ANGULAR">ANGULAR</option>
            <option value="REACT">REACT</option>
          </select>
          
          <div class="encima-tabla">
            <input type="asd" id="searchTerm" placeholder="Escribe para buscar..." onkeyup="doSearch()"/>
          </div>
  
          
  
          <div id="main-container" >
            <table class="display" id="datos" >
  
            
                <tbody>
                <tr>
                    <td class="etiquetas" /><input type="submit1" value="HTML&CSS  &#88"/> <input type="submit2" value="ANGULAR  &#88"/> <input type="submit3" value="JAVA  &#88"/> <input type="submit4" value="REACT  &#88"/> 
                </tr>
                </tbody>
    
            </table>
        </div>

        </form>

        
  
      </div>
        



    )
    
}

export default Principal