import React from 'react'
import { Link } from 'react-router-dom'

export default function ValutazioniList({valutazioni}) {
    //<span>Nessun esame per questo consulto</span>

    return (
        <div className="list">
            <h3>Valutazioni <Link className="ui icon button" to="/valutazione/new"><i className="plus icon"></i></Link></h3>
         
            <table className="ui celled table">
            <thead>
            <tr>
                <th>Strutturale</th>
                <th>Cranio Sacrale</th>
                <th>Ak Ortodontica</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {valutazioni.map((x) =>
                <tr key={x.id}>
                    <td>{x.strutturale}</td>
                    <td>{x.cranioSacrale}</td>
                    <td>{x.akOrtodontica}</td>
                    <td><Link className="ui icon button" to={`/valutazione/edit/${x.id}`}><i className="edit icon"></i></Link></td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

