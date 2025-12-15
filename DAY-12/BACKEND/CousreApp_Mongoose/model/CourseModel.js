const mongoose = require('mongoose');
//schema means structure of table ,
const courseSchema = new mongoose.Schema({
title:{type:String,required:true},
duration:{type:String,required:true}
});

module.exports=mongoose.model("mycourse",courseSchema)