import { createSearchParams, useNavigate } from 'react-router-dom'

function Filters({ queryConfig }: any) {
  const navigate = useNavigate()

  const handleSort = () => {
    navigate({
      pathname: '/new',
      search: createSearchParams({
        ...queryConfig,
        filters: JSON.stringify({
          new_categories: {
            category_name: 'category_1'
          }
        })
      }).toString()
    })
  }

  return (
    <>
      <button onClick={handleSort}>click me</button>
    </>
  )
}

export default Filters
