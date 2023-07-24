var mongoose= require("mongoose")

var MenuSchema = mongoose.Schema({
    userId: {
        type: Number,
        unique: true
      },
      fullName: {
        type: String,
        required: true
      },    
      role: {
        type: String,
        required: true
      }
})
var MenuSchema = mongoose.model("menu",MenuSchema)

module.exports=UsersModel