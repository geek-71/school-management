import { List,SearchBar,ApproveProfile } from "../components"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useSearch } from "../hooks";
import { Link } from "react-router-dom";
import { getAllStudents } from "../services/studentServices";


function Students() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const headers = ['Students Reg. no.','Name', 'Class','View'];
  const [students,setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getAllStudents();
        setStudents(response.data);
        console.log("triggered",response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  },[])
  
  // const { onSearchChange, filteredData } = useSearch(students, ['fullName', 'id']);
  return(
    <>
    <Stack direction="row" gap="2" className="my-6">
    <h2 className='text-center text-2xl me-auto'>Students</h2>
    <div className="actionbtn flex nowrap gap-4"> 
    <Button variant="contained"  onClick={handleOpen} className="m-4">Approval requests</Button>
    <Link to="/students/register"><Button variant="contained" >Add Student</Button></Link>
    
    </div>
    </Stack>
    <div className='container'>
      {/* <SearchBar placeholder={"Search Students"} onChangeHandler={ onSearchChange }/> */}
     { students && <List headers={headers} rows={students} user="students"/> }
    </div>
    <ApproveProfile title= "Student's" handleClose={handleClose} open={open}/>
    </>
  )
}

export default Students