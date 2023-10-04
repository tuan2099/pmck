import { createSearchParams, useNavigate } from 'react-router-dom'
import { Pagination, Stack } from '@mui/material'
import React, { useState } from 'react'

function Paginationcustom({ queryConfig, pageCount }: any) {
  
  const navigate = useNavigate()
  const [page, setPage] = useState(1) // default page
  // setting pagination
  const handleChange = (even, value) => {
    navigate({
      pathname: '/new', //reset URL before transmit param
      search: createSearchParams({ // transmit param with param
        ...queryConfig,
        page: value
      }).toString() // url must be string
    })
    setPage(value) 
  }
  return (
    <>
<<<<<<< HEAD
      {pageCount === 1 ? '' : 
        <Stack spacing={2}>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack> 
      }
      
=======
      <Stack spacing={2}>
        {pageCount === 1 ? '' : <Pagination count={pageCount} page={page} onChange={handleChange} />}
      </Stack>
>>>>>>> da9afef20fb6be3c09bc9062b0a9d1508c479f76
    </>
  )
}

export default Paginationcustom
