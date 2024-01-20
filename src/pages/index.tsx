import Grid from '@mui/material/Grid'
import { Typography, Link, Container, Stack } from '@mui/material'
import { useState } from 'react'
import { Box, Head } from 'mdi-material-ui'
import MaterialTable from 'material-table'
import ExcelUpload from 'src/views/tables/ExcelUpload'
import { tableIcons } from 'src/views/tables/TableIcons'

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState<any[]>([])
  const [columnHeaders, setColumnHeaders] = useState<any[]>([])
  console.log('filteredData', filteredData, columnHeaders);
  
  return (
    <Grid item>
      <Typography variant='h5'>
        <Link  target='_blank'>
        Data Preview
        </Link>
      </Typography>
      <Typography variant='body2'>Tables display sets of data. They can be fully customized</Typography>
      <Container maxWidth='xl'>
        <Stack spacing={3}>
          <Stack direction='row' justifyContent='space-between' spacing={4}>
            <Stack spacing={1}>
              <Stack alignItems='center' direction='row' spacing={1}>
                <ExcelUpload
                  setFilteredData={setFilteredData}
                  setColumnHeaders={setColumnHeaders}
                  filteredData={filteredData}
                />
              </Stack>
            </Stack>
          </Stack>
          <MaterialTable
            icons={tableIcons}
            title='Excel Data Table'
            columns={columnHeaders}
            data={filteredData}
            rowNumbers={true}
            options={{
              sorting: true,
              filtering: true
            }}
          />
        </Stack>
      </Container>
    </Grid>
  )
}

export default Dashboard
