const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define student schema
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    enrolledCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    registrationDate: {
        type: Date,
        default: Date.now
    }
}, {
    collation: 'students',
    timestamps: true,
    read: "nearest",
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});


const STMModel = mongoose.model('Student', studentSchema);
module.exports = STMModel;
