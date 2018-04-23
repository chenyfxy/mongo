var mongoose = require('./db.js'),
    Schema = mongoose.Schema,
    model_alias = 'User';

var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    userpwd: {type: String},                        //密码
    logindate : { type: Date},                 //最近登录时间
    addresses: [
        {
            street: {type: String},
            city: {type: String},
            cc: {type: String}
        }
    ]
});

UserSchema.methods.findByUsername = function (username, callback) {
    return this.model(model_alias).find({username: username}, callback);
}

module.exports = mongoose.model(model_alias,UserSchema);