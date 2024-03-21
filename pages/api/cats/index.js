import dbConnect from '../../../db/connect';
import Cat from '../../../db/models/cat';

export default async function handler(request, response) {
  await dbConnect();
  const { method } = request;
  switch (method) {
    case 'POST':
      try {
        const cat = new Cat(request.body);
        await cat.save();
        response.status(201).json({ success: true, data: cat });
      } catch (error) {
        response.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      response.setHeader('Allow', ['GET', 'POST']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}