import React from 'react'
//import { Link } from 'react-router-dom'

export default function EsamiList({esami}) {
    //<span>Nessun esame per questo consulto</span>

    return (
        <div className="list">
            <h3>Esami <button className="ui icon button"><i className="plus icon"></i></button></h3>
         
            <table className="ui celled table">
            <thead>
            <tr>
                <th>Data</th>
                <th>Tipo</th>
                <th>Descrizione</th>
            </tr>
            </thead>
            <tbody>
            {esami.map((e) =>
                <tr key={e.id}>
                    <td>{e.data}</td>
                    <td>{e.tipo.descrizione}</td>
                    <td>{e.descrizione}</td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

