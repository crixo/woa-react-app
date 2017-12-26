import { client } from '../apiClient';

class PazientiApi {

    static getPazientiPaginated(filters) {
        const limit = filters.pageSize;
        let skip = (filters.page-1) * limit;
        let url = `/api/pazienti/page/${skip}/${limit}`;
        if (filters.filter) {
            url += `?filter=${filters.filter}`;
        }
        return client.get(url);
    }

    static getPaziente(id) {
        const url = `/api/pazienti/${id}`;
        return client.get(url);
    }

    static savePaziente(paziente) {
        const url = '/api/pazienti';
        if (paziente.id === undefined) {
            return client.post(url, paziente);
        }
        return client.put(`${url}/${paziente.id}`, paziente);
    }

    static getProvince() {
        const url = `/api/lookups/province`;
        return client.get(url);
    }
}

export default PazientiApi