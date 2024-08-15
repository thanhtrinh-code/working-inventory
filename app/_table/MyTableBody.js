import { TableBody } from "@mui/material";
import TableCard from "./TableCard";

export default function MyTableBody({rows, page, rowsPerPage, search, handleSelectedItems, handleOpenModal, handleDeletePage, selectedItems }) {
    
  return (
    <TableBody>
            {rows.filter((item) => {
              return item.itemName.toLowerCase() === '' ? item : item.itemName.toLowerCase().includes(search.toLowerCase());
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
              <TableCard key={row.id} 
              row={row}
              handleSelectedItems={handleSelectedItems}
              handleOpenModal={handleOpenModal}
              handleDeletePage={handleDeletePage}
              selectedItems={selectedItems}
              />
            ))}
    </TableBody>
  )
}
