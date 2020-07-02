// const { verifyToken } = require("../../utils/authUtils");

// module.exports = (sequelize, Sequelize) => {
//   const User = sequelize.define("users", {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     email: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       len: [1, 50]
//     },
//     password: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       len: [1, 1000]
//     },
//     mobile: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       unique: true,
//       field: 'mobile',
//       isNumeric: true,
//       validate: {
//         isLongEnough: function (val) {
//           if (val.length != 10) {
//             throw new Error("Please enter 10 digit Valid Phone Number")
//           }
//         }
//       }
//     }
//   }, {
//     freezeTableName: true,
//     timestamps: false
//   });
//   return User;
// };

const { Schema } = require("mongoose");

const usersSchema = Schema({

  id: { type: Number, required: true,unique:true, autoIncrement:true },
  email: { type: String, required: true, minlength:1, maxlength:50 },
  password: { type: String, required: true,minlength:1, maxlength:1000 },
  mobile: { type: Number, required: true, unique:true,length:10}

}, { collection: "users" });

module.exports=usersSchema;