cont mongoose = required('mongoose')

const sellerSchema = mongoose.Schema({
  name:{
    type:String,
    default:'User',
    trim:true
  },
  
  email:{
    type:String,
    unique:true,
  },
  phone:{
    type:Number,
    minLength:10
  },

  products: {
    type:Array,
    default:[]
  },
  gstin:String,
  picture:String

})

module.exports = mongoose.model('user',sellerSchema)