import React from "react";
import Mandalorian from "../../../../assets/images/vinoUmeni.jpeg"


function UltimoVino (){
    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Último vino en la Base de Datos</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "40rem"}} src={Mandalorian} alt=" Star Wars - Mandalorian "/>
                </div>
                <p>Este es un vinito de 10! ideal para festejar cuando ganas un mundial y/o copa América</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Mas detalles de este vino</a>
            </div>
        </div>
    </div>
    )
}
export default UltimoVino