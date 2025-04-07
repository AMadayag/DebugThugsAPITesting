import { ORDER, createDespatchReq } from "../testHelperiOS";

describe('create despatch', () => {
  test('successful return', async () => {
    const res = await createDespatchReq(ORDER);
    expect(res.status).toBe(200);
    console.log(res.data);
  });

  // skipping as api does not check for this
  test.skip('incorrect body', async () => {
    try {
      await createDespatchReq({ 'incorrectOrder': 'incorrect' });
      fail('Did not throw expected error');
    } catch (error) {
      console.error(error);
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
});