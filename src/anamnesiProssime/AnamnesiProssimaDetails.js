import React from 'react'
//import { Link } from 'react-router-dom'

export default function AnamnesiProssimaDetails({anamnesi}) {

    return (
        <div>
            <h3>Anamnesi Prossima <button className="ui icon button"><i className="edit icon"></i></button></h3>
            <div>
                <div className="ui horizontal label">Prima Volta</div>
                <div>{anamnesi.primaVolta}</div>
            </div>
            <div>
                <div className="ui horizontal label">Tipologia</div>
                <div>{anamnesi.tipologia}</div>
            </div>  
            <div>
                <div className="ui horizontal label">Localizzazione</div>
                <div>{anamnesi.localizzazione}</div>
            </div>  
            <div>
                <div className="ui horizontal label">Irradiazione</div>
                <div>{anamnesi.irradiazione}</div>
            </div>  
            <div>
                <div className="ui horizontal label">Durata</div>
                <div>{anamnesi.durata}</div>
            </div>  
            <div>
                <div className="ui horizontal label">Familiarità</div>
                <div>{anamnesi.familiarita}</div>
            </div>            
            <div>
                <div className="ui horizontal label">AltreTerapie</div>
                <div>{anamnesi.altreTerapie}</div>
            </div>            
            <div>
                <div className="ui horizontal label">Varie</div>
                <div>{anamnesi.varie}</div>
            </div> 
        </div>
    )
}

