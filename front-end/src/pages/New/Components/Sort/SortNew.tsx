import { sortBy as sortConstant } from 'src/constant/sort'
import { createSearchParams, useNavigate } from 'react-router-dom'

function SortNew({ queryConfig }: any) {
  const navigate = useNavigate()
  const handleSort = (sortbyValue: string) => {
    navigate({
      pathname: '/new',
      search: createSearchParams({
        ...queryConfig,
        sort: sortbyValue
      }).toString()
    })
  }
  return (
    <>
      <select
        className='cursor-pointer rounded-full bg-white px-5 py-2 text-left text-[16px] capitalize text-color1 outline-none'
        onChange={(e) => handleSort(e.target.value)}
      >
        <option disabled className='' value=''>
          Sắp xếp
        </option>
        <option
          value={sortConstant.arrangeTitleFromAtoZ}
          className='bg-white text-color1 checked:bg-[#e8e8e8] hover:bg-[#e8e8e8]'
        >
          Theo tên: A - Z
        </option>
        <option value={sortConstant.arrangeTitleFromZtoA} className='bg-white text-color1 checked:bg-[#e8e8e8]'>
          Theo tên: Z - A
        </option>
        <option value={sortConstant.newPost} className='bg-white text-color1 checked:bg-[#e8e8e8]'>
          Mới nhất
        </option>
        <option value={sortConstant.lastPost} className='bg-white text-color1 checked:bg-[#e8e8e8]'>
          Cũ nhất
        </option>
      </select>
    </>
  )
}

export default SortNew
