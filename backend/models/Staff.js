import mongoose from "mongoose";
let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const staffSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    fullName:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    Qualification:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    dateOfJoining:{
        type:Date,
        required:true
    },
    employeeRole:{
        type:Date,
        required:true,
        enum : ['Teacher','Admin','Accountant','Management Staff','Assistant Teacher'],
        // default: 'user'
    },
    aadharNo: {
        type: String,
        required: true,
        unique: true
      }, 
    // photo: {
    //     type: String,
    //     required:true
    // },
    dateOfBirth: {
        type: Date,
        required: true
        },
    gender: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    contactInformation: {
        phone: {
            type: Number,
            required: true,
            unique: true
        },
        altNo: {
            type: Number,
            unique: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        }
    },
});

staffSchema.pre('save', async function(next) {
    if (!this.id) {
      const count = await mongoose.models.Staff.countDocuments();
      this.id = `STA${String(count + 1).padStart(3, '0')}`;
    }
    next();
  });

  const Staff = mongoose.model('Staff',staffSchema);
  
export default Staff;