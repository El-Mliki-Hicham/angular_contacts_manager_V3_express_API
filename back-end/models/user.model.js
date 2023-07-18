var mongoose= require("mongoose")

var usersSchema = mongoose.Schema({
    userId: {
        type: Number,
        unique: true
      },
    username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      fullName: {
        type: String,
        required: true
      },    
      birthday: {
        type: Date,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }

})
var UsersModel = mongoose.model("users",usersSchema)

module.exports=UsersModel