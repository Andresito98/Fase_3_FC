import React from "react";



function Tabla(){
    
    return(
        
        <div id="main-container">

            <div class="login-box2">

            
            

            <h1 class="nombreUsu">Filtros de búsqueda </h1> 
            
        
            <form class="form-inline">
                
                <label for="nombreCompleto">Etiquetas </label>
                <select name="etiquetaEspe" id="etiquetaEspe">
                <option value="HTML&CSS" >Escribe para buscar</option>
                <option value="HTML&CSS">HTML&CSS</option>
                <option value="ANGULAR">ANGULAR</option>
                <option value="REACT">REACT</option>
                </select>
        
                <div id="main-container2" >  
                
                    <tbody>
                    <tr>
                        <td class="etiquetas"><input type="submit1" value="HTML&CSS"/> <input type="submit2" value="ANGULAR"/> </td>      
                    </tr>
        
                    </tbody>

                    

                </div>
        
                <div id="main-container2" >
                <tbody>
                    <tr>
                    <td class="etiquetas"><input type="submit4" value="ANGULAR  "/></td>              
                    </tr>
                </tbody>
            
                </div>
        
        
                <label for="Pais">Pais</label>
                <div id="otra_mas">
                
        
                <select name="paises" id="paises" >
                <option value="españa">España</option>
                <option value="portugal">Portugal</option>
                <option value="francia">Francia</option>
                <option value="marruecos">Marruecos</option>
                </select>
        
            <label for="Ciudad">Ciudad</label>
            <select name="ciudades" id="ciudades">
                <option value="badajoz">Badajoz</option>
                <option value="malaga">Malaga</option>
                <option value="sevilla">Sevilla</option>
                <option value="valencia">Valencia</option>
            </select>
            </div>
        
            <label for="presencial">Presencial / Distancia</label>
            <div>   
            <input type="checkbox" class="title2"/>
            <label for="presencial2">Presencial</label>
        
        
            <input type="checkbox" class="title2"/>
            <label for="remoto">Remoto</label>
        
            <div>
                <label for="Nada"></label>
            </div>
        
            <label for="presencial3">Posibilidad Traslado</label>
            <div>   
            
            <input type="checkbox" class="title2"/>
            <label for="presencial2">Presencial</label>
        
        
            <input type="checkbox" class="title2"/>
            <label for="remoto">Remoto</label>
            </div>
            
            
        
            </div>
      
            </form> 

         </div>


        <table class="display" id="datos" >

            <thead>

            <tr>        
                <th class="nombre">NOMBRE </th>
                <th class="ciudad">CIUDAD </th>
                <th class="pais">PAIS </th>
                <th class="telefono">TELEFONO </th>
                <th class="correoElectronico">CORREO ELECTRONICO </th>
                <th class="etiquetas">ETIQUETAS </th>
            </tr>

                {/*

                <tr>        
                <th class="nombre">NOMBRE <a href="javascript:sort(true, 'nombre', 'datos');"> &#129045</a>
                 <a href="javascript:sort(false, 'nombre', 'datos');"> &#129047</a>
                </th>

                    
                <th class="ciudad">CIUDAD <a href="javascript:sort(true, 'ciudad', 'datos');">&#129045</a>
                 <a href="javascript:sort(false, 'ciudad', 'datos');">&#129047</a>
                </th>

                    
                <th class="pais"> PAIS<a href="javascript:sort(true, 'pais', 'datos');">&#129045</a>
                 <a href="javascript:sort(false, 'pais', 'datos');">&#129047</a>
                </th>

                    
                <th class="telefono">TELEFONO <a href="javascript:sort(true, 'telefono', 'datos');">&#129045</a>
                 <a href="javascript:sort(false, 'telefono', 'datos');">&#129047</a>
                </th>

                    
                <th class="correoElectronico">CORREO ELECTRONICO <a href="javascript:sort(true, 'correoElectronico', 'datos');">&#129045</a>
                 <a href="javascript:sort(false, 'correoElectronico', 'datos');">&#129047</a>
                </th>

                    
                <th class="etiquetas">ETIQUETAS <a href="javascript:sort(true, 'etiquetas', 'datos');">&#129045</a>
                 <a href="javascript:sort(false, 'etiquetas', 'datos');">&#129047</a>
                </th>
            </tr>
            */}
                
            </thead>


            <tbody>
            <tr>
                <td id="nombresBold1" class="nombre">Andrés Retamal López </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>

            <tr>
                <td id="nombresBold1" class="nombre">Álvaro Sánchez Monteagudo </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>

            <tr>
                <td id="nombresBold1" class="nombre">Ana Gutierrez Lozano </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>

            <tr>
                <td id="nombresBold1" class="nombre">Andrés Retamal López </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>
            <tr>
                <td id="nombresBold1" class="nombre">Andrés Retamal López </td>
                <td class="ciudad">Malaga</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>
            
            <tr>
                <td id="nombresBold1" class="nombre">Álvaro Sánchez Monteagudo </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>
            <tr>
                <td id="nombresBold1" class="nombre">Álvaro Sánchez Monteagudo </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>

            <tr>
                <td id="nombresBold1" class="nombre">Ana Gutierrez Lozano </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>

            <tr>
                <td id="nombresBold1" class="nombre">Ana Gutierrez Lozano </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>
            <tr>
                <td id="nombresBold1" class="nombre">Ana Gutierrez Lozano </td>
                <td class="ciudad">Badajoz</td>
                <td class="pais">España</td>
                <td class="telefono">+34 689 25 48 65</td>
                <td class="correoElectronico">hcliment@gmail.com</td>
                <td class="etiquetas"><input type="submit" value="HTML&CSS"/> <input type="submit" value="ANGULAR"/></td>
            </tr>


            </tbody>


        </table>

        {/* Estes es del principio*/}
         </div> 
         

    )
    
}


export default Tabla