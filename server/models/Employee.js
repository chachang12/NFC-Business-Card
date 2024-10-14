import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    resources: {
        type: String,
        required: true,
    },

});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;