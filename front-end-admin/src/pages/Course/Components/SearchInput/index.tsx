import { useState, useEffect } from 'react'
import { InputBase } from '@mui/material'
import { debounce } from 'lodash'
import { useLocation, useSearchParams } from 'react-router-dom'

const SearchInput = () => {
  const [values, setValues] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const location = useLocation()

  const page = searchParams.get('page')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = e.target.value
    setIsSearch(true)
    setValues(value)
  }

  useEffect(() => {
    let timeoutId: number

    const debouncedApiCall = debounce(() => {
      if (values && isSearch) {
        setSearchParams({ search: values, page: '1' })
      } else if (values && !isSearch) {
        setSearchParams({
          ...Object.fromEntries([...searchParams]),
          search: values
        })
      } else {
        page && setSearchParams({ page })
      }
    }, 300)

    timeoutId = setTimeout(() => {
      debouncedApiCall()
    }, 300)

    return () => {
      clearTimeout(timeoutId)
      debouncedApiCall.cancel()
    }
  }, [values])

  useEffect(() => {
    const search = searchParams.get('search')
    if (search) setValues(search)
    else {
      setValues('')
    }
  }, [location])

  return <InputBase sx={{ py: '8px', pr: '14px' }} placeholder='Search...' value={values} onChange={handleChange} />
}

export default SearchInput
