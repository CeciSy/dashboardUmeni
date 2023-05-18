import React from "react";

function VinosCard(props) {
    return (
        <div className="col mr-2">
                <div className={`text-md font-weight-bold text-black text-uppercase mb-1`}>Total de {props.title}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{ props.name }</div>
        </div>
    )
}

export default VinosCard;