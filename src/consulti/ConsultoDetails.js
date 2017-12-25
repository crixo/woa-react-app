import React from 'react'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function ConsultoDetails({consulto}) {

    return (
        <div className="details">
            <h3>Consulto <Link className="ui icon button" to={`/consulto/edit/${consulto.id}`}><i className="edit icon"></i></Link></h3>
            <div>
                <i className="calendar icon"></i> <LocalDate value={consulto.data} />
            </div>
            <div>
                <div className="ui horizontal label">Problema Iniziale</div>
                <div>{consulto.problemaIniziale}</div>
            </div>
        </div>
    )
}

