import React from "react";

function ProductList() {
    let arrayTable = [
            {
                nombre: "Brut Nature",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Brut Nature es un Cuvée Excepcionnelle elaborado con las mejores uvas de nuestros viñedos. Dorado brillante, con un particular y atractivo tono característico del Pinot Noir. Su intenso aroma recuerda a cerezas, damascos y miel con una delicada nota a pan tostado. En boca es amplio y untuoso. Su fina y persistente burbuja completa este elegante, complejo e intenso espumante."
            },
            {
                nombre: "Brut Rose",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "De color rosado brillante delicado, posee un intenso aroma de cerezas y frambuesas típico del Pinot Noir de zonas de altura. En boca es amplio, frutado y fresco. Burbuja fina y persistente."
            },
            {
                nombre: "Cabernet Sauvignon",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Color rojo rubí intenso. En la nariz presenta buena expresión y tipicidad varietal, se destacan las notas a pimienta negra y casis. En la boca es carnoso, de estructura tánica fina y elegante, final largo y persistente."
            },
            {
                nombre: "Chardonnay",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Color amarillo claro con reflejos verdosos, brillante. Aroma complejo, se destacan notas cítricas, durazno blanco, con toque florales. En la boca es suave, amplio y fresco, con notas frutales y minerales. Su acidez natural lo hace un vino fresco y su paso por roble y trabajo sobre borras le confieren elegancia y untuosidad."
            },
            {
                nombre: "Extra Brut",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Extra Brut es un Cuvée Spéciale elaborado con uvas Chardonnay y Pinot Noir de parcelas seleccionadas de nuestra finca El Oasis en el Valle de Uco. Su aroma fresco y expresivo recuerda a la manzana verde y cítricos con una delicada nota a pan tostado. En boca su entrada es suave y frutal con una fina y persistente burbuja que completa este armónico y equilibrado espumante."
            },
            {
                nombre: "Malbec",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "A la vista presenta color rojo intenso con tonos violáceos. En nariz se percibe fresco, intenso y complejo, destacándose notas a frutas rojas, flores como rosas y violetas que se combinan con notas balsámicas. En la boca es frutado, fresco y jugoso, de buena estructura y largo final."
            },
            {
                nombre: "Merlot",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "A la vista presenta color rojo con tonalidades bordó. En la nariz es complejo, se destacan aromas a membrillo y frutos rojos y dulce de tomate. En la boca es sedoso y envolvente, de muy buena estructura."
            },
            {
                nombre: "Pinot Noir",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Color rojo cereza, límpido y brillante.Complejo, aromas a jalea de frutillas, cerezas que se combinan con sutiles notal a hoja de tabaco y hierbas frescas como orégano. Entrada amable, jugoso complejo y largo."
            },
            {
                nombre: "Rosado",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "En la nariz se perciben intensos aromas a frutas frescas como frutillas y cerezas que se combinan con sutiles notas florales. Color rosa pálido, brillante.En la boca es frutado, con equilibrada acidez, final fresco y persistente."
            },
            {
                nombre: "Sauvignon Blanc",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Color amarillo claro con reflejos verdosos. En la nariz es expresivo, se destacan notas cítricas, mango y flores de Azahar. En boca es fresco, amplio, con notas frutales."
            },
            {
                nombre: "Syrah",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Posee un color rojo rubí. Su aroma combina notas a frutos negros y especias, con delicadas notas ahumadas. La entrada en boca es dulce, fresco, taninos sedosos, final largo y persistente."
            },
            {
                nombre: "Torrontés",
                volumen: "750 ml",
                bodega: "Umeni",
                descripcion: "Torrontés es un blanco de color amarillo claro y brillante. De aromas intensos a flores blancas y frutas tropicales. Su paladar es expresivo y perfumado, de paso fluido y refrescante. Es un vino con gracia, vibrante y directo, con tipicidad varietal inconfundible y final cítrico persistente y agradable."
            },
        ]        

    return (
<div>        
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
        arrayTable.map((row, i)=> (
            <tr>
            <td>{row.nombre}</td>
            <td>{row.volumen}</td>
            <td>{row.bodega}</td>
            <td>{row.descripcion}</td>
            </tr>
            ))
    }
  </tbody>
</table>
</div>

    )
}

export default ProductList

