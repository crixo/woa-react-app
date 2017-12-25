import { client } from '../apiClient';

class AnamnesiProssimeApi {

    static save(entity) {
        const url = '/api/anamnesi-prossime';
        if(entity.id===undefined){
            return client.post(url, entity);
        }
        return client.put(`${url}/${entity.id}`, entity);
    } 
}

export default AnamnesiProssimeApi