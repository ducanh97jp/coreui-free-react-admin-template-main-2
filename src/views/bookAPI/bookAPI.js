import axiosClient from '../bookAPI/AxiosClient'
const url = "/book"
const link = "/buyBook"
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
    update: (id, params) => {
        return axiosClient.put(`${url}/${id}`, params)
    },
    //buy books

    getAll : () => {
        return axiosClient.get(link);
    },
    getById: (id) => {
        return axiosClient.get(`${link}/${id}`);
    },
    delete: (id) => {
        return axiosClient.delete(`${link}/${id}`);
    },
    create: (params) => {
        return axiosClient.post(link, params)
    },
    update: (id, params) => {
        return axiosClient.put(`${link}/${id}`, params)
    },
}
export default bookAPI;