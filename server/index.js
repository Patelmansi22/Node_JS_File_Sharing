import express from "express";
 import router from "./routes/routes.js";
 import cors from "cors";
import  Dbconnection from "./db/db.js";

const app = express();
const port =3030;

app.use(cors());
app.use("/", router)

Dbconnection();

app.listen(port,()=>console.log(`Server running sucessful on port ${port}`));
