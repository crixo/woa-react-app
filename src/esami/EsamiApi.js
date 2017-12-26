import { client } from '../apiClient';

class EsamiApi {  

    static getTipi() {
        const url = '/api/lookups/tipo-esami';
        return client.get(url);
    }      

    static save(entity) {
        const url = '/api/esami';
        if(entity.id===undefined){
            return client.post(url, entity);
        }
        return client.put(`${url}/${entity.id}`, entity);
    } 
}

export default EsamiApi