import React, { forwardRef, Ref } from 'react'

import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

interface TableIconsProps {
  ref: Ref<unknown>
}

export const tableIcons = {
  Add: forwardRef<unknown, TableIconsProps>((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef<unknown, TableIconsProps>((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef<unknown, TableIconsProps>((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef<unknown, TableIconsProps>((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef<unknown, TableIconsProps>((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef<unknown, TableIconsProps>((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef<unknown, TableIconsProps>((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef<unknown, TableIconsProps>((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef<unknown, TableIconsProps>((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef<unknown, TableIconsProps>((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef<unknown, TableIconsProps>((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef<unknown, TableIconsProps>((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef<unknown, TableIconsProps>((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef<unknown, TableIconsProps>((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef<unknown, TableIconsProps>((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef<unknown, TableIconsProps>((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef<unknown, TableIconsProps>((props, ref) => <ViewColumn {...props} ref={ref} />)
}
