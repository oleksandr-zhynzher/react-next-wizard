import type { NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(response: NextApiResponse<Data>) {
  response.status(200).json({ name: 'John Doe' });
}
