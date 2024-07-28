import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../services/studentServices";
const StudentsDetails = () => {
  const attendance = 100;

  const { id } = useParams();
  const [student,setStudent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); //don't know why its null
  function getProgressBarClass(attendance) {
    if (attendance <= 40) {
      return 'bg-red-500'; // Tailwind CSS equivalent of 'bg-danger'
    } else if (attendance <= 75) {
      return 'bg-yellow-500'; // Tailwind CSS equivalent of 'bg-warning'
    } else {
      return 'bg-green-500'; // Tailwind CSS equivalent of 'bg-success'
    }
  }
  useEffect(() => {
    getStudentById(id).then((response) => {
      setStudent(response.data)
      console.log(response.data);
    })
    .catch( err => setError(err)
      ).finally(
        setLoading(false)
      )
      console.log("dhjhdj");
  }, [])
  console.log("check",student.name)
  console.log("check",student.parentGuardians?.name)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;
  return (
    <div className="container mx-auto ">
      <h1 className='shadow p-3 font-semibold text-2xl'>Student Profile : {student.id} </h1>
      <div className="main-body py-5">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-1 mb-3">
            <div className="card shadow-md mt-4">
              <div className="card-body">
                <div className="flex flex-col items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-full w-24 h-24" />
                  <div className="mt-3">
                    <h4 className="text-xl">{student.displayName}</h4>
                    <p className="text-gray-600 mb-1">{student.class}</p>
                    <p className="text-gray-600 text-sm">{student.rollno}</p>
                    <p className="text-gray-600 text-sm">{student.gender}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-md mt-4 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h6 className="mb-0 pl-2 pt-2">Mail</h6>
                  <span className=" pl-2 text-gray-600 block">{student.email}</span>
                </li>
                <li className="list-group-item">
                  <h6 className="mb-0 pl-2 pt-2">Ph:</h6>
                  <span className="text-gray-600 pl-2">9110972695</span>
                </li>
              </ul>
            </div>
            <div className="card shadow-md mt-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-2">
                  <button className='btn bg-blue-500 rounded hover:bg-blue-700 p-1 text-white w-full '>Previous Result</button>
                </li>
                <li className="list-group-item mb-2">
                  <button className='btn bg-blue-500 rounded hover:bg-blue-700 p-1 text-white w-full'>Fees Details</button>
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
                    <h6 className="mb-0 pl-2">Student Registration No</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    {student.id}
                  </div>
                </div>
                <hr className="my-2" />

                <div className=" grid grid-cols-3 gap-4">
                  <div className="col-span-1 ">
                    <h6 className="mb-0 pl-2">Student Full Name</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    {student.fullName}
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Guardian Name</h6>
                  </div>
                  <div className="pl-2 col-span-2 text-gray-600">
                    {student.parentGuardians?.name}
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">D.O.B</h6>
                  </div>
                  <div className=" pl-2 col-span-2 text-gray-600">
                    {student.dateOfBirth}
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Guardian's Mobile</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    {student.parentGuardians?.contactInformation?.phone}
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Blood Group</h6>
                  </div>
                  <div className="pl-2 col-span-2 text-gray-600">
                    {student.bloodGroup}
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Aadhar No</h6>
                  </div>
                  <div className="col-span-2 text-gray-600 pl-2">
                    {student.aadharNo}
                  </div>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <h6 className="mb-0 pl-2">Address</h6>
                  </div>
                  <div className="pl-2 col-span-2 text-gray-600">
                    {student.address}
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
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '72%' }}></div>
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
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <small className="text-gray-600">Science</small>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <small className="text-gray-600">Social Sci</small>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 rounded-full h-full" style={{ width: '72%' }}></div>
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

                    <span className={`text-gray-600  text-center`}>
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

export default StudentsDetails;