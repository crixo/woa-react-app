import React from 'react'
//import { Link } from 'react-router-dom'

export default function ValutazioniList({valutazioni}) {
    //<span>Nessun esame per questo consulto</span>

    return (
        <div className="list">
            <h3>Valutazioni <button className="ui icon button"><i className="plus icon"></i></button></h3>
         
            <table className="ui celled table">
            <thead>
            <tr>
                <th>Strutturale</th>
                <th>Cranio Sacrale</th>
                <th>AkOrtodontica</th>
            </tr>
            </thead>
            <tbody>
            {valutazioni.map((x) =>
                <tr key={x.id}>
                    <td>{x.strutturale}</td>
                    <td>{x.cranioSacrale}</td>
                    <td>{x.akOrtodontica}</td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

