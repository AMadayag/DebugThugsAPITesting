import { loginUserReq,
  createInvoiceReq,
  MOCK_INVOICE,
  fetchInvoiceReq, 
  registerUserReq} from "../testHelperSushi";

// test for createInvoice
describe('createInvoice', () => {
  let token: string;
  let invoiceId: string;

  beforeAll(async () => {
    const login = await loginUserReq(
      'user@gmail.com',
      'passworD123!'
    );
    token = login.data.data.token;

    const invoice = await createInvoiceReq(MOCK_INVOICE, token);
    invoiceId = invoice.data.invoiceId;
  })

  test('successful retrieval', async () => {
    const res = await fetchInvoiceReq(invoiceId, token);
    expect(res.status).toBe(200);
    expect(res.data).toStrictEqual(expect.any(String));
  });

  test('invalid invoiceId', async () => {
    try {
      await fetchInvoiceReq('invalidId', token);
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
      await fetchInvoiceReq(invoiceId, 'invalidToken');
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

  test.skip('invalid token', async () => {
    const secondUser = await registerUserReq(
    'secondUser@gmail.com',
    'name',
    'passW0rd@'
    );
    const secondToken = secondUser.data.data.token;

    try {
      await fetchInvoiceReq(invoiceId, secondToken);
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(403);
        expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
        expect(axiosError.response.data.error).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });
});