import { client } from '../apiClient';

class ConsultiApi {  

    static save(entity) {
        const url = '/api/consulti';
        if(entity.id===undefined){
            return client.post(url, entity);
        }
        return client.put(`${url}/${entity.id}`, entity);
    } 
}

export default ConsultiApi