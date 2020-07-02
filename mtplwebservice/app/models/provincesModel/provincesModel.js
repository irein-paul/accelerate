const { verifyToken } = require("../../utils/authUtils");


const { Schema } = require("mongoose");

const provincesSchema = Schema({

  pname: { type: String }

}, { collection: "provinces" });



module.exports=provincesSchema;
