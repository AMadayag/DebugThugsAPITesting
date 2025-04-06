import { registerUserReq } from "../testHelperSushi";

// test for registerUser
describe('registerUser', () => {
  // test is skipped because user is already created
  test.skip('successful return', async () => {
    const res = await registerUserReq(
      'user@gmail.com',
      'company',
      'passworD123!');
    expect(res.status).toBe(200);
  })

  test('invalid email', async () => {
    try {
      await registerUserReq(
        '',
        'company',
        'passworD123!'
      );
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(400);
        expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
        expect(axiosError.response.data.message).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });

  test('invalid password', async () => {
    try {
      await registerUserReq(
        'user@gmail.com',
        'company',
        'h'
      );
      fail('Did not throw expected error');
    } catch (error) {
      if (error instanceof Error) {
        const axiosError = error as any;
        expect(axiosError.response.status).toBe(400);
        expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
        expect(axiosError.response.data.message).toStrictEqual(expect.any(String));
      } else {
        throw error;
      }
    }
  });
});