import { loginUserReq } from "../testHelper";

// test for registerUser
// test is skipped because user is already created
describe('loginUser', () => {
  test('successful login', async () => {
    const res = await loginUserReq(
      'user@gmail.com',
      'passworD123!'
    );
    expect(res.status).toBe(200);
  });

  test('incorrect password', async () => {
    try {
      await loginUserReq(
        'user@gmail.com',
        'wrongpwd'
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

