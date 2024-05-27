const jwt=require('jsonwebtoken');
const JWT_SECRET='12345'
const jwtAuthMiddleware=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error:"unauthorized"});
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(err){
        console.error(err);
        res.status(401).json({error:"invalid token"})
    }
}


const generateToken=(userData)=>{
    return jwt.sign(userData,JWT_SECRET)
}
module.exports={jwtAuthMiddleware,generateToken};