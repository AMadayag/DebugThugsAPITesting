import { loginUserReq, createInvoiceReq, MOCK_INVOICE, MISSING_FIELDS } from "../testHelper";

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

  test('successful creation', async () => {
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