import React from 'react'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function PazienteDetails({paziente}) {
    return (
        <div>
            <div className="ui card">
                <div className="content">
                    <div className="header">
                        <span className="title">{paziente.nome}  {paziente.cognome}</span>
                        <Link className="ui icon button" to={`/paziente/edit/${paziente.id}`}><i className="edit icon"></i></Link>
                    </div>
                    <div className="meta"><i className="birthday icon"></i> <LocalDate value={paziente.dataDiNascita} /></div>
                    <div className="description">
                        <div><i className="industry icon"></i>  {paziente.professione}</div>
                        <div><i className="address book icon"></i> {paziente.indirizzo}<br />{paziente.cap} {paziente.citta} ({paziente.prov})</div>
                    </div>
                </div>
                <div className="extra content">
                    <div>
                        <i className="mail icon"></i>
                        {paziente.email}
                    </div>
                    <div>
                        <i className="phone icon"></i>
                        {paziente.telefono}
                    </div>
                    <div>
                        <i className="mobile icon"></i>
                        {paziente.cellulare}
                    </div>
                </div>
            </div>
        </div>
    )
}

