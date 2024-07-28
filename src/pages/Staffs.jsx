import { List,SearchBar,ApproveProfile } from "../components"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useSearch } from "../hooks";
import { Link } from "react-router-dom";
import { getStaffs } from '../services/StaffServices.js';


function Staffs() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const headers = ['staffs Reg. no.','Name', 'Class','View'];
  
  const [staffs,setStaffs] = useState([]); // can we add this to store
  // /const [searchField,setSearchField] = useState('');
  // const [filteredstaffs,setFilteredstaffs] = useState(staffs);

  // const onSearchChange = (e) => {
  //   const searchString  = e.target.value.toLocaleLowerCase();
  //   setSearchField(searchString);
  // }
  // useEffect(() => {
  //   const newFilteredstaffs = staffs.filter((staff) => (staff.name.toLocaleLowerCase().includes(searchField) || staff.registrationNo.includes(searchField) || staff.class.includes(searchField)));
  //   setFilteredstaffs(newFilteredstaffs);
  // },[searchField])
  // const { onSearchChange, filteredData } = useSearch(staffs, ['name', 'registrationNo', 'class']);

  useEffect(()=>{
    getStaffs().then((res) => {
      setStaffs(res.data);
      console.log(staffs);
    }).catch((error)=> {
      console.log(error)
    })
  },[])

  return(
    <>
    <Stack direction="row" gap="2" className="my-6">
    <h2 className='text-center text-2xl me-auto'>staffs</h2>
    <div className="actionbtn flex nowrap gap-4"> 
    <Button variant="contained"  onClick={handleOpen} className="m-4">Approval requests</Button>
    <Link to="/staffs/register"><Button variant="contained" >Add staff</Button></Link>
    
    </div>
    </Stack>
    <div className='container'>
      {/* <SearchBar placeholder={"Search staffs"} onChangeHandler={ onSearchChange }/> */}
      <List headers={headers} rows={staffs} user="staffs"/>
    </div>
    <ApproveProfile title= "staff's" handleClose={handleClose} open={open}/>
    </>
  )
}

export default Staffs