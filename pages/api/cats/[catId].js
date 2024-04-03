import dbConnect from "../../../db/connect";
import Cat from "../../../db/models/cat";

export default async function handler(request, response) {
  const {
    query: {catId},
    method,
  } = request;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const cat = await Cat.findById(catId);
        if (!cat) {
          return response
            .status(404)
            .json({success: false, message: "Cat not found"});
        }
        response.status(200).json({success: true, data: cat});
      } catch (error) {
        response.status(500).json({success: false, message: error.message});
      }
      break;

    case "POST":
      try {
        const cat = await Cat.create(request.body);
        response.status(201).json({success: true, data: cat});
      } catch (error) {
        response.status(400).json({success: false, message: error.message});
      }
      break;

    case "PUT":
      try {
        const {catId} = request.query;
        const cat = await Cat.findByIdAndUpdate(catId, request.body, {
          new: true,
          runValidators: true,
        });

        if (!cat) {
          return response
            .status(404)
            .json({success: false, message: `No cat with id ${catId}`});
        }

        response.status(200).json({success: true, data: cat});
      } catch (error) {
        response.status(400).json({success: false, message: error.message});
      }
      break;

    case "DELETE":
      try {
        const {id} = request.query;
        const deletedCat = await Cat.findByIdAndDelete(id);

        if (!deletedCat) {
          return response
            .status(400)
            .json({success: false, message: `No cat with id ${id}`});
        }

        response.status(200).json({success: true, data: {}});
      } catch (error) {
        response.status(400).json({success: false, message: error.message});
      }
      break;

    default:
      response.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}
