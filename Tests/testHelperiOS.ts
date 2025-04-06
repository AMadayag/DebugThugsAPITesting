import axios from "axios";

const API_URL = 'https://t6r6w5zni9.execute-api.us-east-1.amazonaws.com';

export async function getAllReq() {
  try {
    const res = await axios.get(`${API_URL}/v1/despatchAdvice`);
    return res;
  } catch (error) {
    throw error;
  }
}
