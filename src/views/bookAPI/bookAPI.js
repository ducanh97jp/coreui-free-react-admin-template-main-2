import axiosClient from '../bookAPI/AxiosClient'
const url = "/book"
const bookAPI = {
    getAll : () => {
        return axiosClient.get(url);
    },
    getById: (id) => {
        return axiosClient.get(`${url}/${id}`);
    },
    delete: (id) => {
        return axiosClient.delete(`${url}/${id}`);
    },
    create: (params) => {
        return axiosClient.post(url, params)
    },
    update: (params) => {
        return axiosClient.put(url, params)
    },
}
export default bookAPI;