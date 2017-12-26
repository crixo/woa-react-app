import React from 'react'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function TrattamentiList({trattamenti}) {
    //<span>Nessun esame per questo consulto</span>

    return (
        <div className="list">
            <h3>Trattamenti <Link className="ui icon button" to="/trattamento/new"><i className="plus icon"></i></Link></h3>
         
            <table className="ui celled table">
            <thead>
            <tr>
                <th>Data</th>
                <th>Descrizione</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {trattamenti.map((x) =>
                <tr key={x.id}>
                    <td><LocalDate value={x.data} /></td>
                    <td>{x.descrizione}</td>
                    <td><Link className="ui icon button" to={`/trattamento/edit/${x.id}`}><i className="edit icon"></i></Link></td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

