import { createSearchParams, useNavigate } from 'react-router-dom'
import { Pagination, Stack } from '@mui/material'
import React, { useState } from 'react'

function Paginationcustom({ queryConfig, pageCount }: any) {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const handleChange = (even, value) => {
    navigate({
      pathname: '/new',
      search: createSearchParams({
        ...queryConfig,
        page: value
      }).toString()
    })
    setPage(value)
  }
  return (
    <>
      <Stack spacing={2}>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}

export default Paginationcustom
