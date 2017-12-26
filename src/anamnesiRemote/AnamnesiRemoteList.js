import React from 'react'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function AnamnesiRemoteList({anamnesi, tipi}) {

    const findDescr = (id, lookup) => {
        return (id !== undefined && lookup.length>0)?
                lookup.find(x=>x.value === id).text
                : '';
    }

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
                    <td>{ findDescr(x.tipoId, tipi) }</td>
                    <td>{x.descrizione}</td>
                    <td><Link className="ui icon button" to={`/anamnesi-remota/edit/${x.id}`}><i className="edit icon"></i></Link></td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

