import { loginUserReq, createInvoiceReq } from "../testHelper";

// test for createInvoice
describe('createInvoice', () => {
  let token: string;
  beforeAll(async () => {
    const login = await loginUserReq(
      'user@gmail.com',
      'passworD123!'
    );
    token = login.data.data.token;
  })

  test.skip('successful creation', async () => {
    const res = await createInvoiceReq(MOCK_INVOICE, token);
    expect(res.status).toBe(200);
    expect(res.data.invoice).toStrictEqual(expect.any(String));
  });

  test('missing fields', async () => {
    try {
      await createInvoiceReq(MISSING_FIELDS, token);
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(400);
        expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
        expect(axiosError.response.data.error).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });

  test('invalid token', async () => {
    try {
      await createInvoiceReq(MOCK_INVOICE, 'invalidToken');
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(401);
        expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
        expect(axiosError.response.data.message).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });
  
});

const MOCK_INVOICE = {
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

const MISSING_FIELDS = {
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