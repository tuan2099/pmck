import { sort as sortConstant } from 'src/constant/sort'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Select, Option } from "@material-tailwind/react";

function SortCourse({ queryConfig }: any) {
  const navigate = useNavigate()
  // setting sort
  const handleSort = (sortbyValue: any) => {
    navigate({
      pathname: '/courses', // reset URL before transmit param
      search: createSearchParams({
        // transmit param with param is obj
        ...queryConfig,
        sort: sortbyValue
      }).toString()
    })
  }

  return (
    <>
        <div className="w-72">
          <Select label="Sắp xếp" onChange={handleSort}>
            <Option value={sortConstant.arrangeTitleFromAtoZ}>Theo tên: A - Z</Option>
            <Option value={sortConstant.arrangeTitleFromZtoA}>Theo tên: Z - A</Option>
            <Option value={sortConstant.newPost}>Mới nhất</Option>
            <Option value={sortConstant.lastPost}>Cũ nhất</Option>
          </Select>
        </div>
    </>
  )
}

export default SortCourse
