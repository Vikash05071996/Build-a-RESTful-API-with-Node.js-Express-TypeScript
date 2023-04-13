import express from "express";
import createHttpError from "http-errors";
const app = express();
app.get("/",(req,res)=>{
    res.send("hello ji")
})

app.use(()=>{
    throw createHttpError(404,"rout not found")
})
app.listen(9000,()=>{
    console.log("server started on port 9000")
});
  