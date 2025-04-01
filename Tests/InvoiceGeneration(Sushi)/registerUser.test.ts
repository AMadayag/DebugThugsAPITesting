import { registerUserReq } from "../testHelper";

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

  test.todo('invalid email');
  test.todo('invalid password');
});