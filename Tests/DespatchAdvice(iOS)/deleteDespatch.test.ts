import { ORDER, createDespatchReq, deleteDespatchReq } from "../testHelperiOS";
import { parseStringPromise } from 'xml2js';

describe('create despatch', () => {
  let despatchId: string;
  beforeEach(async () => {
    const despatch = await createDespatchReq(ORDER);
    despatchId = await getDespatchId(despatch.data);
  })

  test('successful deletion', async () => {
    const res = await deleteDespatchReq(despatchId);
    expect(res.status).toBe(200);
  });

  // test('invalid despatchId', async () => {
  //   try {
  //     await deleteDespatchReq('invalid');
  //     fail('Did not throw expected error');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       const axiosError = error as any;
  //       expect(axiosError.response.status).toBe(400);
  //       expect(axiosError.response.data.status).toStrictEqual(expect.any(String));
  //       expect(axiosError.response.data.error).toStrictEqual(expect.any(String));
  //     } else {
  //       throw error;
  //     }
  //   }
  // })
});

async function getDespatchId(body: any) {
  const xml = body.DespatchAdvice.replace(/\\n/g, '').replace(/\\+/g, ''); // Clean escaped newlines and backslashes
  const result = await parseStringPromise(xml, { explicitArray: false });

  const despatchId = result?.Despatch?.['cbc:ID'];
  return despatchId;
}
