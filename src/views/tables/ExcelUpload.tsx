import React from 'react'
import { Button, SvgIcon } from '@mui/material'
import { ExcelRenderer } from 'react-excel-renderer'
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon'
import { Column } from 'material-table'

interface ExcelUploadProps {
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>
  setColumnHeaders: React.Dispatch<React.SetStateAction<any[]>>
  filteredData: any[]
}

const ExcelUpload: React.FC<ExcelUploadProps> = ({ setFilteredData, setColumnHeaders }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      ExcelRenderer(file, (err: string, resp: any) => {
        if (err) {
          console.error(err)
        } else {
          let [header, ...rows] = resp.rows
          header = [...header]
          const columnsData: Column<any>[] = header.map((col: string) => ({
            title: col,
            field: col
          }))
          const rowDetails = rows.map((row: string[]) => {
            const rowData: any = {}
            columnsData.forEach((col: any, index) => {
              rowData[col.field] = row[index]
            })

            return rowData
          })
          const columnsDataSlno = [
            { title: 'Sl.no', field: 'Sl.no', render: (rowData: any) => rowDetails.indexOf(rowData) + 1 },
            ...columnsData
          ]
          const filteredColumns = columnsDataSlno.filter((column: any) => isNaN(column.title))
          setColumnHeaders(filteredColumns)
          setFilteredData(rowDetails)
        }
      })
    }
  }

  return (
    <div>
      <input
        style={{ display: 'none' }}
        id='excel-upload'
        type='file'
        accept='.xlsx, .xls'
        onChange={handleFileUpload}
      />
      <label htmlFor='excel-upload'>
        <Button
          component='span'
          color='inherit'
          startIcon={
            <SvgIcon fontSize='small'>
              <ArrowUpOnSquareIcon />
            </SvgIcon>
          }
        >
          Import
        </Button>
      </label>
    </div>
  )
}

export default ExcelUpload
