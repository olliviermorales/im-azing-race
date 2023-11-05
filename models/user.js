import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full Name is required!'],
  },
  nickName: {
    type: String,
    required: [true, 'Nickname is required!'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact Number is required!'],
  },
  hospital: {
    type: String,
    required: [true, 'Hospital is required!'],
  },
  yearLevel: {
    type: String,
    required: [true, 'yearLevel is required!'],
  },
  isContactable: {
    type: Boolean,
    required: [true, 'IsContactable is required!'],
  },
  role: {
    type: String,
    required: [true, 'role is required!'],
  },
  email: {
    type: String,
    required: [true, 'email is required!'],
  },
});

const User = models.User || model('User', UserSchema);

export default User;
