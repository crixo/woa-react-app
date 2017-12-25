import React from 'react'
//import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function TrattamentiList({trattamenti}) {
    //<span>Nessun esame per questo consulto</span>

    return (
        <div className="list">
            <h3>Trattamenti <button className="ui icon button"><i className="plus icon"></i></button></h3>
         
            <table className="ui celled table">
            <thead>
            <tr>
                <th>Data</th>
                <th>Descrizione</th>
            </tr>
            </thead>
            <tbody>
            {trattamenti.map((x) =>
                <tr key={x.id}>
                    <td><LocalDate value={x.data} /></td>
                    <td>{x.descrizione}</td>
                </tr>
            )}
            </tbody>
            </table>
        </div>
      );
}

