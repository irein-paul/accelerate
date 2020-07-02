const { verifyToken } = require("../../utils/authUtils");

const { Schema } = require("mongoose");

const purchasepolicySchema = Schema({
    id:{
        type:String ,unique:true,required:true
    },
    contactInformation: {
        a:{ type: String, required: true},
            },
    deliveryInformation:{ 
        e:{ type: String, required: true},
    },
    personalInformation: { 
        c:{type: String, required: true },
    },
    vehicleOwnerInformation: {
        q:{ type: String, required: true},
    }
}, { collection: "purchasepolicy" });


module.exports=purchasepolicySchema;