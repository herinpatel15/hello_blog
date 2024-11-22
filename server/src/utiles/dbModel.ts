import {model, Schema} from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const UserModel = model('User', UserSchema)

export {
    UserModel
}