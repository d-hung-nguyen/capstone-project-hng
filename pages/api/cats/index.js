import dbConnect from '../../../db/connect';
import Cat from '../../../db/models/cat';

export default async function handler(request, response) {
  await dbConnect();

  const { method } = request;

  switch (method) {
    case 'GET':
      try {
        const cats = await Cat.find({});
        response.status(200).json({ success: true, data: cats })
      } catch (error) {
        response.status(500).json({ success: false, message: error.message })
      }
      break;

    case 'POST':
      try {
        const cat = await Cat.create(request.body);
        response.status(201).json({ success: true, data: cat })
      } catch (error) {
        response.status(400).json({ success: false, message: error.message })
      }
      break;

  

    default:
      response.setHeader('Allow', ['GET', 'POST']);
      response.status(405).end(`Method ${method} Not Allowed`)
  }
}
