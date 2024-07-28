import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { List } from "./index"
import { IoMdCloseCircleOutline } from "react-icons/io";

function ApproveProfile({title,handleClose,open}) {
  

  const list  = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "class": "10A",
      "profileLink": "approve/1"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "class": "10B",
      "profileLink": "approve/2"
    },
    {
      "id": 3,
      "name": "Charlie Brown",
      "class": "10A",
      "profileLink": "approve/3"
    },
    {
      "id": 4,
      "name": "David Wilson",
      "class": "10C",
      "profileLink": "approve/4"
    },
    {
      "id": 5,
      "name": "Eve Adams",
      "class": "10B",
      "profileLink": "approve/5"
    }
  ]
  
  
  return (

    <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/4 p-6 pt-0 rounded-2xl left-1/4 w-3/5 border-2 border-solid border-gray-500 shadow-xl bg-white">  
            <Stack direction="row" gap="2" className="my-6">
            <h2 className='text-center text-2xl me-auto'>{`${title} Approval Pending`}</h2>
            <button type="button" onClick={ handleClose } ><IoMdCloseCircleOutline className="h-6 w-6" /></button>
            </Stack>
            <List  rows={list} />
        </Box>
    </Modal>
  )
}

export default ApproveProfile