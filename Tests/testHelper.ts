import axios from "axios";

const API_URL = 'http://sushi-invoice-application.ap-southeast-2.elasticbeanstalk.com';

export async function registerUserReq(
    email: string,
    name: string,
    password: string
  ) {
  try {
    const res = await axios.post(`${API_URL}/v1/users/register`,
      {
        email: email,
        name: name,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000,
      });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function loginUserReq(
  email: string,
  password: string
) {
  try {
    const res = await axios.post(`${API_URL}/v1/users/login`,
      {
        email: email,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000,
      }
    )
    return res;
  } catch (error) {
    throw error;
  }
}

export async function createInvoiceReq(
  body: any,
  token: string
) {
  try {
    const res = await axios.post(`${API_URL}/v1/invoices/create`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Cookie: `token=${token}`
        },
        timeout: 10000,
      }
    )
    return res;
  } catch (error) {
    throw error;
  }
}