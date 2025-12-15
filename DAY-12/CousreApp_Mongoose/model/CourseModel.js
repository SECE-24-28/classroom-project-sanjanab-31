const mongoose = require('mongoose');
//schema means structure of table ,
const courseSchema = new mongoose.Schema({
title:{type:String,required:true},
duration:{type:String,required:true}
});

exports.model = mongoose.model("mycourses", courseSchema);