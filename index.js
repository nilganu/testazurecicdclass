import express from 'express';
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to node azure cicd!!");
});
app.get("/about",(req,res)=>{
    res.json({
        message:"This simple node app",
        developer:"Nilay Ganatra",
    })
});
app.listen(PORT,'0.0.0.0',()=>{
    console.log(`server is running on ${PORT}`);
})