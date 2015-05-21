var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

// create a schema or blueprint for
// our user
var userSchema = new mongoose.Schema({
                  email: {
                    type: String,
                    lowercase:  true,
                    required: true,
                    index: {
                      unique: true
                    }
                  },
                  passwordDigest: {
                    type: String,
                    required: true
                  },
                  first_name: {
                    type: String,
                    default: ""
                  },
                  last_name: {
                    type: String,
                    default: ""
                  }
                });

var confirm = function (pswrd, pswrdCon) {
  return pswrd === pswrdCon;
};

userSchema.statics.createSecure = function (params, cb) {
  var isConfirmed;

  isConfirmed = confirm(params.password, params.password_confirmation);

  if (!isConfirmed) {
    return cb("Passwords Should Match", null);
  }

  var that = this;

  // hashing and salting
  bcrypt.hash(params.password, 12, function (err, hash) {
    console.log(hash)
    params.passwordDigest = hash;
    that.create(params, cb);
  });

};




var User = mongoose.model("User", userSchema);

module.exports = User;







