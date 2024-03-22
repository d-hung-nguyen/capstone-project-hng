import dbConnect from '../../../db/connect';
import Owner from '../../../db/models/owner';

export default async function handler(request, response) {
  await dbConnect();
  const { method } = request;
  switch (method) {
    case 'POST':
      try {
        const owner = new Owner(request.body);
        await owner.save();
        response.status(201).json({ success: true, data: owner });
      } catch (error) {
        response.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      response.setHeader('Allow', ['POST']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}