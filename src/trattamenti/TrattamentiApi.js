import { client } from '../apiClient';

class TrattamentiApi {      

    static save(entity) {
        const url = '/api/trattamenti';
        if(entity.id===undefined){
            return client.post(url, entity);
        }
        return client.put(`${url}/${entity.id}`, entity);
    } 
}

export default TrattamentiApi