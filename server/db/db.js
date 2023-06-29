 import mongoose from "mongoose";


  const  Dbconnection =()=>{
    mongoose.connect("mongodb+srv://mansi:dEqPhCs2fOdelbZf@cluster0.jdsgxzr.mongodb.net/File-Sharing",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
     }).then(()=>console.log("Database connected sucessful"))
       .catch((err)=>console.log(err));
 }

 export default Dbconnection

