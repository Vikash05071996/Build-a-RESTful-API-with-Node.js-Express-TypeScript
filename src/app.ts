import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
const app = express();
app.get("/",(req,res)=>{
    res.send("hello ji")
})

app.use(()=>{
    throw createHttpError(404,"rout not found")
})
const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{
 console.log(err.message,err.statuscode)
 if(res.headersSent)
 {
    return next(err);
 }
 res.status(err.statuscode || 500).json({message:err.message})
}
app.use(errorHandler)
app.listen(9000,()=>{
    console.log("server started on port 9000")
});
  