import axiosClient from '../bookAPI/AxiosClient'
const link = "/buyBook"
const buyBookAPI = {
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
export default buyBookAPI;