import React from "react";
// import Footer from "../Footer/Footer";
import Cepas from "./SubComponents/Cepas/Cepas";
//import ListadoDeVinos from "./SubComponents/ListadoDeVinos/ListadoDeVinos";
import Totales from "./SubComponents/Totales/Totales";
import UltimoVino from "./SubComponents/UltimoVino/UltimoVino";

function ContentRowTop() {

    let arrayTotales = [
        {
            titulo : "Total Vinos",
            cifra: 21,
            color: "primary",
        },
        {
            titulo : "Total Usuarios",
            cifra: 43,
            color: "succes"            
        },
        {
            titulo : "Total Cepas",
            cifra: 10,
            color: "warning"            
        }
    ]

         
    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard Vinos</h1>
        </div>
    
        <div className="row">
           {
            arrayTotales.map((totales,i)=> <Totales key={totales.titulo + i} titulo={totales.titulo} color={totales.color} cifra={totales.cifra}/>)
           }
            
        </div>
       
        <div className="row">
            <UltimoVino/>
            <Cepas/>
            
        </div>
    </div>
    )
}

export default ContentRowTop