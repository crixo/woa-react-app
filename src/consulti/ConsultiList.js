import React from 'react'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function ConsultiList({consulti}) {
    return (
        <div>
            <h3>Consulti <Link className="ui icon button" to="/consulto/new"><i className="plus icon"></i></Link></h3>
            
            <table className="ui celled table">
            <thead>
            <tr>
                <th>Data</th>
                <th>Problema iniziale</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {consulti.map(c =>
                <tr key={c.id}>
                    <td><LocalDate value={c.data} /></td>
                    <td>{c.problemaIniziale}</td>
                    <td><Link to={`/consulto/details/${c.id}`}>Show</Link></td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

