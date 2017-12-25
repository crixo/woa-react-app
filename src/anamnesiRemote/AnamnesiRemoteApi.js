import { client } from '../apiClient';

class AnamnesiRemoteApi {
    
    static getTipi() {
        const url = `/api/lookups/tipo-anamnesi`;
        return client.get(url);
      }   

    static save(entity) {
        const url = '/api/anamnesi-remote';
        if(entity.id===undefined){
            return client.post(url, entity);
        }
        return client.put(`${url}/${entity.id}`, entity);
    } 
}

export default AnamnesiRemoteApi