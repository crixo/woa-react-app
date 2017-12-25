import React from 'react'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

export default function AnamnesiRemotaDetails({anamnesi}) {

    return (
        <div>
            <h3>Anamnesi Remota</h3>
            <div>
                <i className="calendar icon"></i> <LocalDate value={anamnesi.data} />
            </div>
            <div>
                <i className="info icon"></i> {anamnesi.tipo === undefined? '' : anamnesi.tipo.descrizione}
            </div>
            <div className="descrizione">
                {anamnesi.descrizione}
            </div>
        </div>
    )
}

