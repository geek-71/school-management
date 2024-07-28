// src/components/StudentForm.jsx
import react,{ useState } from 'react'
// import axios from 'axios';
import { createStudent } from '../services/studentServices';

const StudentRegn = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    displayName:'',
    // photo: null,
    dateOfBirth: '',
    class:'',
    // rollno:'',
    gender: '',
    bloodGroup: '',
    address: '',
    aadharNo:'',
    contactInformation: {
      phone: '',
      altNo: '',
      email: ''
    },
    parentGuardians: {
      name: '',
      contactInformation: {
        phone: '',
        email: ''
      },
      occupation: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length > 1) {
      setFormData((prev) => {
        const updatedData = { ...prev };
        let obj = updatedData;
        keys.forEach((key, index) => {
          if (index === keys.length - 1) {
            obj[key] = value;
          } else {
            obj = obj[key];
          }
        });
        return updatedData;
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0]
    }));
  };
const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("data",formData);
    try {
      const formDataCopy = { ...formData };

      // Create FormData object to send the form data including file
      const data = new FormData();
      console.log(typeof data);
      Object.keys(formDataCopy).forEach(key => {
        // if (key === 'photo') {
        //   data.append(key, formDataCopy[key]);
        // } else 
        if (typeof formDataCopy[key] === 'object') {
          let obj = new Object();
          Object.keys(formData[key]).forEach(nestedKey => {
            data.append(`${key}[${nestedKey}]`, formData[key][nestedKey]);
          });
          // Object.keys(formDataCopy[key]).forEach(semikey => {  
          //   obj.append(semikey,formDataCopy[key][semikey]);
          // })  
          // data.append(formDataCopy[key],obj);
        } else {
          data.append(key, formDataCopy[key]);
        }
      });
      console.log(data)
      const response = await createStudent(formDataCopy);
      console.log(data);
      
      console.log("sdafsdf",response);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };


  return (
    <div className="max-w-5xl mt-6 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">Display Name</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 hover:file:bg-gray-100"
          />
        </div> */}

        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
          <input
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        


        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="" disabled>Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="aadharNo" className="block text-sm font-medium text-gray-700">Aadhar no.</label>
          <input
            type="text"
            id="aadharNo"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            name="contactInformation.phone"
            placeholder="1234567890"
            pattern="[0-9]{10}"
            value={formData.contactInformation.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="altNo" className="block text-sm font-medium text-gray-700">Alternate Phone Number</label>
          <input
            type="text"
            id="altNo"
            name="contactInformation.altNo"
            value={formData.contactInformation.altNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="contactInformation.email"
            value={formData.contactInformation.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Parent/Guardian Information */}
        <div className="mb-4">
          <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
          <input
            type="text"
            id="guardianName"
            name="parentGuardians.name"
            value={formData.parentGuardians.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700">Parent/Guardian Phone</label>
          <input
            type="tel"
            id="guardianPhone"
            name="parentGuardians.contactInformation.phone"
            placeholder="1234567890"
            pattern="[0-9]{10}"
            value={formData.parentGuardians.contactInformation.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="guardianEmail" className="block text-sm font-medium text-gray-700">Parent/Guardian Email</label>
          <input
            type="email"
            id="guardianEmail"
            name="parentGuardians.contactInformation.email"
            value={formData.parentGuardians.contactInformation.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="guardianOccupation" className="block text-sm font-medium text-gray-700">Parent/Guardian Occupation</label>
          <input
            type="text"
            id="guardianOccupation"
            name="parentGuardians.occupation"
            value={formData.parentGuardians.occupation}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegn;
