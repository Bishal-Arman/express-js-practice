const express=require("express")
const app=express();
const path=require("path");
const bodyParser=require("body-parser");
const port=process.env.PORT || 4000;

const router=require("./userRouter")


app.use((req,res,next)=>{
    console.log("its a middleware");
    next();
})



app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use(router)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname)+"/index.html")
});

app.get("/about",(req,res)=>{
    res.send("About page");
});



app.get("/about/:username",(req,res)=>{
    res.send(`Welcome ${req.params.username} your about page`);
 
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
