






const mongoose = require("mongoose");


const commentSchema = mongoose.Schema(
      {
          body:{type:String, required:true},
      
          userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
          publicationId:{type:mongoose.Schema.Types.ObjectId,ref:"publication"},
      },
      {
          versionKey:false,
          timestamps:true,
      }  
)

module.exports = mongoose.model("comment",commentSchema);