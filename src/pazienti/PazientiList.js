import React from 'react'
import { Paginator, DataTable } from '@orange-marmalade/paginate-this'
import '../styles/css/paginate-this.min.css'
import '../styles/scss/pazienti-list.css'
import GridFilter from './GridFilter'
import { Link } from 'react-router-dom'
import LocalDate from '../common/LocalDate'

const headers = [
    {
        field: 'nome',
        sortable: false,
        text: 'Nome'
    }, 
    {
        field: 'cognome',
        text: 'Cognome',
        sortable: false,
        format: p => (
            <Link to={`/paziente/details/${p.id}`}>{p.cognome}</Link>
        )
    }, 
    {
        field: 'citta',
        sortable: false,
        text: 'Città'
    }, 
    {
        field: 'dataDiNascita',
        sortable: false,
        text: 'Data di Nascita',
        format: p => (
            <LocalDate value={p.dataDiNascita} />
        )
    }
]





export default function PazientiList() {

    return (
        <section>
            <GridFilter />
            <Paginator listId="pazienti"  />
            <DataTable listId="pazienti" className="ui celled striped table" headers={headers} />
        </section>
    )
}

