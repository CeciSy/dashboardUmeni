import React from 'react';


function VinoRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.volumen}</td>
                    <td>{props.anio}</td>
                    <td>{props.descripcion}</td>
                </tr>
            )
    }
    
        

export default VinoRow;