import { client } from '../apiClient';

class ValutazioniApi {      

    static save(entity) {
        const url = '/api/valutazioni';
        if(entity.id===undefined){
            return client.post(url, entity);
        }
        return client.put(`${url}/${entity.id}`, entity);
    } 
}

export default ValutazioniApi