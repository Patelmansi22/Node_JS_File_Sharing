
import File  from "../models/file.js";



const uploadImage = async(req,res)=>{
    const fileobj ={
        path: req.file.path,
        name : req.file.originalname
    }
try {
    const file = await File.create(fileobj);
res.status(200).json({path:`http://localhost:3030/file/${file._id}`})
} catch (error) {
    console.log(error
        )
}
}


 export const downloadImage = async (req,res)=>{
try {
  const file= await File.findById(req.params.fileId);
  file.downloadCount++;
  await file.save();
//   res.download(file.path,file.name)
} catch (error) {
    
}
}

export default uploadImage