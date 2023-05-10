import React from "react";
import Cepas from "./SubComponents/Cepas/Cepas";
import Totales from "./SubComponents/Totales/Totales";
import UltimoVino from "./SubComponents/UltimoVino/UltimoVino";

function ContentRowTop() {
    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard Vinos</h1>
        </div>
    
        <div className="row">
            <Totales/>
            <Totales/>
            <Totales/>
        </div>
       
        <div className="row">
            <UltimoVino/>

            <Cepas/>
        </div>
    </div>
    )
}

export default ContentRowTop