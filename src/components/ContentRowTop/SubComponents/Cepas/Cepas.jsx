import React, { Component } from "react";
import CepasCard from "./subcomponents/CepasCard";

class Cepas extends Component {

    constructor(){
        super()
        this.state ={
            cepaList: []
        }
    }

    componentDidMount(){

        fetch("http://localhost:3031/api/cepaList")
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(vinos =>{
        //console.log(cepas)
        this.setState({cepaList: vinos.data})
        })
        .catch(error => console.log(error))
        }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Cepas en la Base de Datos</h5>
                    </div>
                    <div className="card-body">
                        {
                        this.state.cepaList.map((cepa, i) => <CepasCard key={ cepa.cepas_idCepa + i } name={ cepa.cepas_idCepa } />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Cepas