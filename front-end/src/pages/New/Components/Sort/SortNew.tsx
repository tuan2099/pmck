import { sortBy as sortConstant } from 'src/constant/sort'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function SortNew({ queryConfig }: any) {
  const navigate = useNavigate()
  // setting sort
  const handleSort = (sortbyValue: string) => {
    navigate({
      pathname: '/new', // reset URL before transmit param
      search: createSearchParams({
        // transmit param with param is obj
        ...queryConfig,
        sort: sortbyValue
      }).toString()
    })
  }
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small-label'>Sắp xếp</InputLabel>
        <Select
          labelId='demo-select-small-label'
          id='demo-select-small'
          label='Age'
          onChange={(e) => handleSort(e.target.value)}
          defaultValue=''
        >
          <MenuItem value={sortConstant.arrangeTitleFromAtoZ}>Theo tên: A - Z</MenuItem>
          <MenuItem value={sortConstant.arrangeTitleFromZtoA}>Theo tên: Z - A</MenuItem>
          <MenuItem value={sortConstant.newPost}>Mới nhất</MenuItem>
          <MenuItem value={sortConstant.lastPost}>Cũ nhất</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default SortNew
