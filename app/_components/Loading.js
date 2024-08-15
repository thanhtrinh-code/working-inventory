
import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={3} style={{fontSize: '20px', fontFamily: 'monospace'}}>
            Loading... Please Wait
        </TableCell>
        <TableCell>{''}</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableBody>
  )
}
