import React from "react";


// class ContentWrapper extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             vinosTable: []
//         }
//     }

// async componentDidMount() {
//     const response = await fetch ("http://localhost:3031/apiVinos");
//     const data = await response.json();
//     this.setState({vinosTable:data.data})
// }

function ListadoDeVinos(props) {
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
                    <tbody data={props.data}/>
                    </table>
            </div>   
        </div>  
    </div>
    </div>  
        </div> 			
					
						
    )
}

export default ListadoDeVinos
