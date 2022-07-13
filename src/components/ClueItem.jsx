import { useDispatch } from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


const ClueItem = ({id, question,category,value,clue}) => {
  const dispatch = useDispatch();
  


  return (
    <TableRow>
    <TableCell>{category.title}</TableCell>
    <TableCell>{value}</TableCell>
    </TableRow>
  );
};

export default ClueItem;

