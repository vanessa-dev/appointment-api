import express from 'express';

const app = express();

app.get('/',(request, response)=>{
 response.json({message:"Hello World Node!"});
})

app.listen(3335,()=>{
    console.log("Server Started on port 3335!");
})