import { useState, useEffect } from "react";
import VinoRow from "./subcomponentes/VinoRow";
import React from "react";

function ListadoDeVinos() {
    const [vinos, setVinos]= useState([]);

    useEffect(() => {
        console.log("esto esta funcando");
        fetch("http://localhost:3031/apiVinos")
        .then(response=> response.json())
        .then(producto => {
            setVinos (producto.data)
           //console.log(producto.data)
        })
        
        .catch(error => console.error(error));
    }, []);
    
    return(
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Lista de Productos</h5>
    
    <div className="card-body">
        <div className="text-center">
                    <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Volumen</th>
                        <th scope="col">Bodega</th>
                        <th scope="col">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            vinos.map( ( vino , i) => {
                                return <VinoRow { ...vino} key={vino.nombre + i}/>
                            })
                            }

                        </tbody>
                        
                    </table>
            </div>   
        </div>  
    </div>
    </div>  
        </div> 			
        
        
                		
    )
}

export default ListadoDeVinos
