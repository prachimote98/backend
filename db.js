const mongoose=require('mongoose')
//mongoose collection
// const mongoUrl='mongodb://localhost:27017/connectdb';

// const mongoUrl= 'mongodb+srv://moteprachi1998:TVyNojx7TrZwM0Tv@cluster0.ce5lf.mongodb.net/'

const mongoUrl=process.env.mongoUrl

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDBserver");
});

db.on('error',(err)=>{
    console.log("error while connecting",err)
})

