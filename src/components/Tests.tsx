import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const onClick = (e: any) => {
  e.stopPropagation()
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Test Name' },
  { field: 'description', headerName: 'Description' },
  { field: 'modified', headerName: 'Modified' },
  {
    field: 'run',
    headerName: 'Run Test',
    sortable: false,
    renderCell: (params) => (
      <Button variant='contained' color='success' onClick={onClick}>
        Run
      </Button>
    ),
  },
  {
    field: 'edit',
    headerName: 'Edit',
    sortable: false,
    renderCell: (params) => (
      <IconButton aria-label='edit' size='small' onClick={onClick}>
        <EditIcon fontSize='inherit' />
      </IconButton>
    ),
  },
  {
    field: 'delete',
    headerName: 'Delete',
    sortable: false,
    renderCell: (params) => (
      <IconButton aria-label='delete' size='small' onClick={onClick}>
        <DeleteIcon fontSize='inherit' />
      </IconButton>
    ),
  },
]

const rows = [
  { id: 1, name: 'Test AAA', description: 'AAA', modified: '2022/06/01' },
  { id: 2, name: 'Test BBB', description: 'BBB', modified: '2022/06/01' },
  { id: 3, name: 'Test CCC', description: 'CCC', modified: '2022/06/01' },
  { id: 4, name: 'Test DDD', description: 'DDD', modified: '2022/06/01' },
  { id: 5, name: 'Test EEE', description: 'EEE', modified: '2022/06/01' },
  { id: 6, name: 'Test FFF', description: 'FFF', modified: '2022/06/01' },
  { id: 7, name: 'Test GGG', description: 'GGG', modified: '2022/06/01' },
  { id: 8, name: 'Test HHH', description: 'HHH', modified: '2022/06/01' },
]

export const Tests = () => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
