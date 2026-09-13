import { BASE_URL, ENDPOINTS } from './constants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export async function fetchCategories() {
  const { data } = await axios.get(ENDPOINTS.categories);
  return data;
}
