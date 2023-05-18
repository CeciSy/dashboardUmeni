import React, { Component } from "react";
import VinosCard from "./subcomponents/VinosCard";

class Totales extends Component {
	constructor(){
		super()
		this.state = {
			totalVinos: [],
			totalUsuarios: [],
			totalCepas: [],
		}
	}

	componentDidMount(){
		fetch("http://localhost:3031/apiVinos")
		.then(respuesta => {
			return respuesta.json()
		})
		.then(result => {
			//console.log(result.total)
			this.setState({ totalVinos: result.total})
		})
		.catch(error => console.log(error))

		fetch("http://localhost:3031/apiVinos/listadoCepas")
		.then(respuesta => {
			return respuesta.json()
		})
		.then(result => {
			this.setState({ totalCepas: result.total })           
		})
		.catch(error => console.log(error))

		fetch("http://localhost:3031/apiUsers")
		.then(respuesta => {
			return respuesta.json()
		})
		.then(result => {
			this.setState({ totalUsuarios: result.total })           
		})
		.catch(error => console.log(error))
	}
	
	render(){
    return(
		<div className="row">
			<div className="col-md-4 mb-4">
				<div className={`card border-left- shadow h-100 py-2`}>
					<div className="card-body">
						<div className="row no-gutters align-items-center">

                        	<VinosCard  title="Vinos" name={this.state.totalVinos} />

							<div className="col-auto">
								<i className="fa-solid fa-wine-glass-empty fa-shake fa-xl"></i>
								<i className="fa-solid fa-wine-glass-empty fa-shake fa-xl"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4 mb-4">
				<div className={`card border-left- shadow h-100 py-2`}>
					<div className="card-body">
						<div className="row no-gutters align-items-center">

                        	<VinosCard  title="Usuarios" name={this.state.totalUsuarios} />

							<div className="col-auto">
								<i className="fa-solid fa-user fa-shake fa-xl"></i>
								<i className="fa-solid fa-user fa-shake fa-xl"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4 mb-4">
				<div className={`card border-left- shadow h-100 py-2`}>
					<div className="card-body">
						<div className="row no-gutters align-items-center">

                        	<VinosCard  title="Cepas" name={this.state.totalCepas} />

							<div className="col-auto">
								<i className="fa-solid fa-seedling fa-shake fa-xl"></i>
								<i className="fa-solid fa-seedling fa-shake fa-xl"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
    		)
		}
}

export default Totales