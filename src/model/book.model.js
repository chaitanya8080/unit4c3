




const mongoose = require("mongoose");


const booksSchema = mongoose.Schema(
      {
          likes :{type:Number, required:true,default:0},
          coverImage :{type:String, required:false,unique:true},
          content:{type:String, required:true},
          userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
          publicationId:{type:mongoose.Schema.Types.ObjectId, ref:"publication"},
      },
      {
          versionKey:false,
          timestamps:true,
      }  
)

module.exports = mongoose.model("book", booksSchema);