import mongoose from 'mongoose'
let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const studentSchema = new mongoose.Schema({
    id: {
    type: String,
    unique: true,
    // required: true
    },
    fullName: {
      type: String,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    class: {
      type: Number,
      required: true
    },
    rollno: {
      type: String,
      default: 'A-07'
      // required: true
    },
    aadharNo: {
      type: String,
      required: true
    }, 
    // photo: {
    //   type: String,
    //   required:true
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
        required: true
      },
      altNo: {
        type: Number
      },
      email: {
        type: String,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      }
    },
    parentGuardians: {
        name: {
          type: String,
          required: true
        },
        contactInformation: {
          phone: {
            type: Number,
            required: true
          },
          email: {
            type: String,
            required: true
          }
        },
        occupation: {
          type: String,
          required: true
        }
    }
    
  });
  
  studentSchema.pre('save', async function(next) {
    if (!this.id) {
      const count = await mongoose.models.Student.countDocuments();
      this.id = `STU${String(count + 1).padStart(4, '0')}`;
    }
    next();
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  export default Student;


  // use 
  // createAt and updateAt 
  // pre and post method 
  // static and query method 