
import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function EmptyData() {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={3} style={{fontSize: '20px', fontFamily: 'monospace'}}>
            The inventory is empty. Please add items to display.
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableBody>
  )
}
