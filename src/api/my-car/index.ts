import { get } from '../index.ts';

export default function getOrder(param: { userId: number }): Promise<unknown> {
  return get('/order/getorder/', param);
}
