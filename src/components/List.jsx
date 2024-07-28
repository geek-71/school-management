import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';

 function List({headers,rows,user}) {
  return (
    <>
      <TableContainer component={Paper} className="">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {headers && <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header} align="center">
                  { header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>}
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               <TableCell  align="center">{row.id}</TableCell>
               <TableCell  align="center">{row.fullName}</TableCell>
               <TableCell  align="center">{row.class}</TableCell>
               <TableCell align="center"><Link to={`/${user}/${row.id}`}><Button variant="outlined" startIcon={<AiOutlineUser />}>View
                </Button></Link></TableCell> 
        
              {/* //   {Object.keys(row).map((key) => (
              //        key !== 'profileLink' ? (<TableCell key={key} align="center">{row[key]}</TableCell>): (<TableCell key={key} align="center"><Link to={`/${user}/${row[key]}`}><Button variant="outlined" startIcon={<AiOutlineUser />}>View
              //       </Button></Link></TableCell>)
              //   ))
              // }
              */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
)}
export default List
