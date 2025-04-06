import { getAllReq } from "../testHelperiOS";

describe('get all despatch ids', () => {
  test('successful return', async () => {
    const res = await getAllReq();
    expect(res.status).toBe(200);
    console.log(res.data);
  });
});