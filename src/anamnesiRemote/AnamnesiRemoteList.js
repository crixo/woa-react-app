import React from 'react'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function AnamnesiRemoteList({anamnesi}) {
    return (
        <div>
            <h3>
                Anamnesi Remote 
                <Link className="ui icon button" to="/anamnesi-remota/new"><i className="plus icon"></i></Link>
            </h3>
            <table className="ui celled table">
            <thead>
            <tr>
                <th>Data</th>
                <th>Tipo</th>
                <th>Descrizione</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {anamnesi.map(x =>
                <tr key={x.id}>
                    <td><LocalDate value={x.data} /></td>
                    <td>{x.tipo.descrizione}</td>
                    <td>{x.descrizione}</td>
                    <td><Link to={`/anamnesi-remota/edit/${x.id}`}>Show</Link></td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

