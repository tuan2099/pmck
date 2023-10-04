import { createSearchParams, useNavigate } from 'react-router-dom'

function Filters({ queryConfig }: any) {
  const navigate = useNavigate()

  // setting Filters
  const handleFilters = () => {
    navigate({
      pathname: '/new', //reset URL before transmit param
      search: createSearchParams({ // transmit param with param is obj
        ...queryConfig,
        filters: JSON.stringify({
          new_categories: {
            category_name: 'category_1'
          }
        })
      }).toString() // url must be string
    })
  }

  return (
    <>
      {/*<button onClick={handleFilters}>click me</button>*/}
    </>
  )
}

export default Filters
