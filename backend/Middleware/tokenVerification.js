const jwt=require('jsonwebtoken')

require('dotenv').config()


const tokenVerify=(req,res,next)=>{

    const bearerToken=req.headers.authorization
    if(bearerToken===undefined)
        res.send({message:"Unautorized access"})
    else
    {
        let token=bearerToken.split (' ')[1]
        try{
            let decode=jwt.verify(token,process.env.SECRET_KEY)
            next()
        }
        catch(err)
        {
            res.send({message:"Token expired... Login again"})
        }

    }
}

module.exports=tokenVerify