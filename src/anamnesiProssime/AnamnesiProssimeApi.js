import { client } from '../apiClient';

class AnamnesiProssimeApi {

    static save(entity) {
        const url = '/api/anamnesi-prossime';
        if(entity.isNew){
            return client.post(url, entity);
        }
        return client.put(`${url}/${entity.consultoId}`, entity);
    } 
}

export default AnamnesiProssimeApi