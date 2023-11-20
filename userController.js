const login=(req,res)=>{

    const name=req.body.username;
    const pass=req.body.password;

    res.json({
        success: true,
    });
}

module.exports=login;