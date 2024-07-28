import axios from "axios"

const API_URL = "http://localhost:5000/staffs"

export function getStaffs(){
    return axios.get(`${API_URL}`);
}
export function getStaffById(id){
    return axios.get(`${API_URL}/${id}`);
}