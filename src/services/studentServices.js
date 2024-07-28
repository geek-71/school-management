import axios from 'axios';

const API_URL = 'http://localhost:5000/students';

export const getAllStudents = () => {
  return axios.get(API_URL);
};

export const createStudent = (data) => {
  console.log(typeof data)
  return axios.post(`${API_URL}/register`,data);
};

export const getStudentById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateNotice = (id, notice) => {
  return axios.put(`${API_URL}/${id}`, notice);
};

export const deleteNotice = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};