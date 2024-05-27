const mongoose=require('mongoose');
// const mongoURL='mongodb://localhost:27017/mydb';


const mongoURL='mongodb+srv://dm034445:BorIR4nZzeYOefi9@cluster0.raqkfs9.mongodb.net/mini_project';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

const db=mongoose.connection;
db.on('connected',()=>{
console.log("connected")
})

db.on('error',(err)=>{
    console.log("connected error"+err)
    })

    db.on('disconnected',()=>{
        console.log("disconnected")
        })


module.exports=db;
