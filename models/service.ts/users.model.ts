import mongoose, { Schema, Model } from 'mongoose';

interface IUser {
    name: string;
    type: string;
    vehicals: String;
    isEnabled: boolean
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    type: { type: String, required: true },
    vehicals: { type: Array<any>, required: true},
    isEnabled: { type: Boolean, required: false, default: true }
}, {timestamps: true}); 



const User = mongoose.model<IUser>('User', UserSchema); 
export default User;