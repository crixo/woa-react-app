import React from 'react'
import { Link } from 'react-router-dom'

export default function AnamnesiProssimaDetails({anamnesi}) {
    if(anamnesi.consultoId === undefined){
        return(
            <div>
                <h3>Anamnesi Prossima <Link className="ui icon button" to="/anamnesi-prossima/new"><i className="plus icon"></i></Link></h3>
            </div>
        );
    }

    return (
        <div>
            <h3>Anamnesi Prossima <Link className="ui icon button" to={`/anamnesi-prossima/edit/${anamnesi.consultoId}`}><i className="edit icon"></i></Link></h3>
            <div className="detailsItem">
                <div className="ui horizontal label">Prima Volta</div>
                <div>{anamnesi.primaVolta}</div>
            </div>
            <div className="detailsItem">
                <div className="ui horizontal label">Tipologia</div>
                <div>{anamnesi.tipologia}</div>
            </div>  
            <div className="detailsItem">
                <div className="ui horizontal label">Localizzazione</div>
                <div>{anamnesi.localizzazione}</div>
            </div>  
            <div className="detailsItem">
                <div className="ui horizontal label">Irradiazione</div>
                <div>{anamnesi.irradiazione}</div>
            </div>  
            <div className="detailsItem">
                <div className="ui horizontal label">Durata</div>
                <div>{anamnesi.durata}</div>
            </div>  
            <div className="detailsItem">
                <div className="ui horizontal label">Familiarità</div>
                <div>{anamnesi.familiarita}</div>
            </div>            
            <div className="detailsItem">
                <div className="ui horizontal label">Altre Terapie</div>
                <div>{anamnesi.altreTerapie}</div>
            </div>            
            <div className="detailsItem">
                <div className="ui horizontal label">Varie</div>
                <div>{anamnesi.varie}</div>
            </div> 
        </div>
    )
}

