import React from 'react'
import { Button, SvgIcon } from '@mui/material'
import { ExcelRenderer } from 'react-excel-renderer'
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import { Column } from 'material-table'

interface ExcelUploadProps {
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>
  setColumnHeaders: React.Dispatch<React.SetStateAction<any[]>>
  filteredData: any[]
}

const ExcelUpload: React.FC<ExcelUploadProps> = ({ setFilteredData, setColumnHeaders, filteredData }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      ExcelRenderer(file, (err, resp) => {
        if (err) {
          console.error(err)
        } else {
          let [header, ...rows] = resp.rows
          debugger
          header = ['SL.NO', ...header]
          debugger
          const columnsData: Column<filteredData>[] = header.map((col: string) => ({
            title: col,
            field: col
          }))
          setColumnHeaders(columnsData)
          setFilteredData(
            rows.map((row: string[], i: number) => {
              const rowData: filteredData = {}
              columnsData.forEach((col, index) => {
                rowData[col.field] = row[index]
              })
              rowData['SL.NO'] = i + 1
              return rowData
            })
          )
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
