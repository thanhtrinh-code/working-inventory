import { TableCell, TableRow, TextField } from "@mui/material";


export default function TableHeader({columns, search, setSearch}) {
  return (
    <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , 
                    borderBottom: '2px solid black',
                    fontWeight: 'bold'

                  }}
                >
                  { column.id === 'action' ? 
                  <>
                    <TextField variant="outlined" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    size="small" 
                    fullWidth 
                    label="Search Item"/>

                  </>
                  : column.label
                  }
                </TableCell>
              ))}
    </TableRow>
  )
}
