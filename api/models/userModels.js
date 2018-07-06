const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
});

UserSchema.pre('save', function(next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
    bcrypt.compare(plainTextPW, this.password, function(err, isMatch) {
        if (err) {
            return callBack(err);
        }
        callBack(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
