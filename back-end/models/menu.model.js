var mongoose= require("mongoose")

var MenuSchema = mongoose.Schema({
    displayName: {
        type: String,
        unique: true
      },
      iconName: {
        type: String,
        
      },    
      role: {
        type: String,
      },
      route: {
        type: String,
        unique: true
      },
      displaying: {
        type: Boolean,
      }
})
var MenuModule = mongoose.model("menu",MenuSchema)

module.exports=MenuModule