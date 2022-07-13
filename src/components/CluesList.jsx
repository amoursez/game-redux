import React from 'react'
import {useSelector} from 'react-redux'
import ClueItem from './ClueItem'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

const CluesList = () => {

    const clues = useSelector(state => state.clues.clues)

    /* for (let i in clues){
    let values = clues[i].value

    //values.sort((a,b)=>a-b)

    console.log(values);
    } */

    return (
    <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
       <TableBody>
       {clues.map((clue) => (
        <ClueItem
        key={clue.id}
        {...clue}
        />
      ))} 
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CluesList
