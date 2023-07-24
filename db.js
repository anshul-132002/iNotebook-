const mongoose = require ('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook"
const connetToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to Mongo Successfully ");
    })
}
module.exports = connetToMongo;

