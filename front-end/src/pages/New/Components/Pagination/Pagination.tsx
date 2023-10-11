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
      {pageCount === 1 ? '' : 
        <Stack spacing={2}>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack> 
      }
      

    </>
  )
}

export default Paginationcustom
