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

export async function fetchInvoiceReq(
  invoiceId: string,
  token: string
) {
  try {
    const res = await axios.get(`${API_URL}/v1/invoices/${invoiceId}`,
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

export const MOCK_INVOICE = {
  "invoiceId": "TEST-INVOICE-ID",
  "supplier": "supplier name",
  "buyer": "buyer name",
  "total": 9.99,
  "currency": "AUD",
  "issueDate": "2025-04-01",
  "dueDate": "2025-04-01",
  "items": [
    {
      "name": "string",
      "count": 1,
      "cost": 9.99
    }
  ],
  "buyerAddress": {
    "street": "string",
    "country": "AU"
  },
  "buyerEmail": "user@example.com",
  "buyerPhone": "string",
  "supplierAddress": {
    "street": "string",
    "country": "AU"
  },
  "supplierEmail": "user@example.com",
  "supplierPhone": "string",
  "paymentAccountId": "string",
  "paymentAccountName": "string",
  "financialInstitutionBranchId": "string"
}

export const MISSING_FIELDS = {
  "invoiceId": "TEST-INVOICE-ID",
  "supplier": "supplier name",
  "total": 9.99,
  "currency": "AUD",
  "issueDate": "2025-04-01",
  "items": [
    {
      "name": "string",
      "count": 1,
      "cost": 9.99
    }
  ],
  "buyerAddress": {
    "street": "string",
    "country": "AU"
  },
  "buyerEmail": "user@example.com",
  "buyerPhone": "string",
  "supplierAddress": {
    "street": "string",
    "country": "AU"
  },
  "supplierEmail": "user@example.com",
  "supplierPhone": "string",
  "paymentAccountId": "string",
  "paymentAccountName": "string",
  "financialInstitutionBranchId": "string"
}