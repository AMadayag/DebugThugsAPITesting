import { getAllReq } from "../testHelperiOS";

describe('get all despatch ids', () => {
  test('successful return', async () => {
    const res = await getAllReq();
    expect(res.status).toBe(200);
    console.log(res.data);
  })

  // test('invalid email', async () => {
  //   try {
  //     await registerUserReq(
  //       '',
  //       'company',
  //       'passworD123!'
  //     );
  //     fail('Did not throw expected error');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       const axiosError = error as any;
  //       expect(axiosError.response.status).toBe(400);
  //       expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
  //       expect(axiosError.response.data.message).toStrictEqual(expect.any(String));
  //     } else {
  //       throw error;
  //     }
  //   }
  // });
});