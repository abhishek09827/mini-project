const express=require('express');
const cors=require('cors');
app=express();
const db=require('./db')
const companyRoute=require('./routes/companyRoutes');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
const logRequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] request made to url ${req.originalUrl}`);
    next();
}
app.use(logRequest);


app.get('/',  (req, res) => {
    const {instagramIdToUrlSegment, urlSegmentToInstagramId} = require('instagram-id-to-url-segment')
console.log(instagramIdToUrlSegment('1038059720608660215')) 
console.log(urlSegmentToInstagramId('Cf4dPucLzW0')) 
    res.send('Hi');
});


app.use('/company',companyRoute);
app.listen(3000,()=>{
    console.log('Server is listening at 3000')
});