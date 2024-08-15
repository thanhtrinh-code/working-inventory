import { Checkbox, TableCell, TableRow } from "@mui/material";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";


export default function TableCard({row, handleDeletePage, handleOpenModal, handleSelectedItems, selectedItems  }) {
  return (
    <TableRow key={row.id}>
                <TableCell padding="checkbox" style={{borderBottom: '1px solid black'}}>
                  <Checkbox onChange={(e) => handleSelectedItems(e, row.itemName)}
                  checked={Object.keys(selectedItems).filter(key=> selectedItems[key]).includes(row.itemName)}
                  />
                </TableCell> 
                <TableCell style={{borderBottom: '1px solid black'}}>{row.itemName}</TableCell>
                <TableCell style={{borderBottom: '1px solid black'}}>
                  {row.quantity}
                  </TableCell>
                <TableCell style={{borderBottom: '1px solid black'}}>{row.department}</TableCell>
                <TableCell align="center" style={{borderBottom: '1px solid black'}}>
                  {<div style={{display: 'flex',justifyContent:'flex-end', gap: '40px'}}>
                    <MdModeEdit size={20} 
                    style={{cursor: 'pointer'}}
                    onClick={() => handleOpenModal(row.id)}
                    />
                  <FaTrashAlt size={20} 
                  onClick={() => handleDeletePage(row.id)}
                  style={{cursor: 'pointer'}}/>
                  </div>
                  }
                  </TableCell>
    </TableRow>
  )
}
