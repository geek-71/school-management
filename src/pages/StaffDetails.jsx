import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getStaffById } from '../services/StaffServices.js'

const StaffDetails = () => {
  const attendance = 60;
  const { id } = useParams(); 
  const [staff,setStaff] = useState({});
  useEffect(()=>{
    getStaffById(id).then((response) => {
      setStaff(response.data);
    }).catch( err => console.log(err));
  },[])
  function getProgressBarClass(attendance) {
    if (attendance <= 40) {
      return 'bg-red-500'; // Tailwind CSS equivalent of 'bg-danger'
    } else if (attendance <= 75) {
      return 'bg-yellow-500'; // Tailwind CSS equivalent of 'bg-warning'
    } else {
      return 'bg-green-500'; // Tailwind CSS equivalent of 'bg-success'
    }
  }

  return (
    <div className="container mx-auto ">
      <h1 className='shadow p-3 font-semibold text-2xl'>Staff's Profile : {id}</h1>
      <div className="main-body py-5">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-1 mb-3">
            <div className="card shadow-md mt-4">
              <div className="card-body">
                <div className="flex flex-col items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-full w-24 h-24" />
                  <div className="mt-3">
                    <h4 className="text-xl">{staff.name}</h4>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-md mt-4 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h6 className="mb-0 pl-2 pt-2">Mail</h6>
                  <span className=" pl-2 text-gray-600 block"></span>
                </li>
                <li className="list-group-item">
                  <h6 className="mb-0 pl-2 pt-2">Phone</h6>
                  <span className="text-gray-600 pl-2">9110972695</span>
                </li>
              </ul>
            </div>
            <div className="card shadow-md mt-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-2">
                  <button className='btn bg-blue-500 rounded hover:bg-blue-700 p-1 text-white w-full '>Salary Details</button>
                </li>
               
                <li className="list-group-item mb-2">
                  <button className='btn bg-red-500 rounded hover:bg-red-700 p-1 text-white w-full'>Delete</button>
                </li>
              </ul>
            </div>

          </div>
          <div className="md:col-span-4">
            <div className="card shadow-md mb-3">
              <div className="card-body">
              <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Teacher Full Name</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    Naaz Ahmad Khan
                  </div>
                </div>
                <hr className="my-2" />

                <div className=" grid grid-cols-3 gap-4">
                  <div className="col-span-1 ">
                    <h6 className="mb-0 pl-2">Qualification</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    M.Tech
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Guardian Name</h6>
                  </div>
                  <div className="pl-2 col-span-2 text-gray-600">
                    Mohammad Imran
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">D.O.B</h6>
                  </div>
                  <div className=" pl-2 col-span-2 text-gray-600">
                    12/09/1978
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Mobile</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    987654323
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Aadhar No</h6>
                  </div>
                  <div className="pl-2 col-span-2 text-gray-600">
                    12345678901234
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Pan Card No</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    NK2345G6
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Address</h6>
                  </div>
                  <div className="pl-2 col-span-2 text-gray-600">
                   Thana Road Gumla
                  </div>
                </div>
                <hr className="my-2" />
               
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-3">
                <div className="card shadow-md h-full">
                  <div className="card-body">
                    <h6 className="flex items-center mb-3"><i className="material-icons text-info mr-2">Student</i>Exam Status</h6>
                    <div className="mb-2">
                      <small className="text-gray-600">English</small>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '23%' }}></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <small className="text-gray-600">Hindi</small>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <small className="text-gray-600">Math</small>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <small className="text-gray-600">Science</small>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '76%' }}></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <small className="text-gray-600">Social Sci</small>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '52%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="card shadow-md">
                  <div className="card-body">
                    <h6 className="flex items-center mb-3"><i className="material-icons text-info mr-2">Student</i>Attendance Status</h6>
                    <div className="mb-2">
                      <div className="mb-2">
                        <small className="text-gray-600">Attendance</small>
                        <div className="bg-gray-200 rounded-full h-2 mt-1">
                          <div className={`rounded-full h-full ${getProgressBarClass(attendance)} style={{ width: ${attendance}% }`}>
                            
                          </div>
                        </div>
                      </div>

                    </div>

                    <span className={'text-gray-600  text-center'}>
                      {attendance}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default StaffDetails;