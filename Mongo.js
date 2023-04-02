mongoose=require("mongoose")
mongoose.set('strictQuery', true);
// const mongoDB="mongodb://127.0.0.1:27017/react-database"
const mongoDB="mongodb+srv://shootersahil20:Sahilg@cluster0.td0y3ap.mongodb.net/mernstack?retryWrites=true&w=majority"


// password:Sahilg /it should not contain any special character

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://shootersahil20:Sahil@123@cluster0.td0y3ap.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });









const Mongo=()=>{
  return(
    // before using mongodb atlas 
//   mongoose.connect(mongoDB,(err)=>{
//     if(err){
//       console.log(`here an error ocurred${err}`)
//     }
//     else{
//       console.log("Mongodb is connected")
//     }
//  })
// ///////////////After using mongodb atlas//////////////////////
mongoose.connect(mongoDB,{
  useNewUrlParser:true,
  // useCreateIndex:true,
  useUnifiedTopology:true,
  // useFindAndModify:false,
}).then(()=>{
  console.log("mongodb successfully connected")
}).catch((err)=>{
  console.log(`Here an error occured ${err}`)
})
// ///////////////////////////////////////////

)}
module.exports={Mongo}


