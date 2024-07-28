import { Stack,Button } from '@mui/material'
import { useState } from 'react';
import {AddNotice,NoticeContainer} from '../components';
const notices = [
  {
    id: 1,
    publishDate: "2024-07-01",
    heading: "Independence Day Holiday",
    content: "The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday! The school will be closed on July 4th for Independence Day. Enjoy the holiday!",
    link: "/notices/independence-day"
  },
  {
    id: 2,
    publishDate: "2024-07-10",
    heading: "Parent-Teacher Conferences",
    content: "Parent-Teacher conferences will be held on July 15th. Please make sure to schedule an appointment with your child's teacher.",
    link: "/notices/parent-teacher-conferences"
  },
  {
    id: 3,
    publishDate: "2024-07-20",
    heading: "Annual Sports Day",
    content: "The annual school sports day is scheduled for August 5th. Students are encouraged to participate and cheer for their teams.",
    link: "/notices/annual-sports-day"
  }
];


function Notices() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Stack direction="row" className='m-6'>
      <h2 className='me-auto font-bold text-2xl'>Notices</h2>
      <Button variant="contained" onClick={handleOpen}>Add Notice</Button>
    </Stack>
    <Stack spacing={2}>
      {notices.map(notice => (
        <NoticeContainer key={notice.id} content={notice.content}  heading={notice.heading} publishDate={notice.publishDate} link={notice.link}/>
      ))}
    </Stack>
    <AddNotice open={open} handleClose={handleClose}/>
    </>
  )
}
export default Notices