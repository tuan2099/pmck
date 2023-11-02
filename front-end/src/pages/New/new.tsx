import { useQuery } from '@tanstack/react-query'
import newApi from 'src/apis/new.api'
import Cardnew from 'src/components/Cardnew'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import SortNew from './Components/Sort'
import Paginationcustom from './Components/Pagination'
import Custombutton from 'src/components/Custombutton'
import { FaFilter, FaGripHorizontal, FaListUl } from 'react-icons/fa'
import { IconButton } from '@mui/material'
import Filters from './Components/Filters'
import { useState } from 'react'
import BlockSkeleton from 'src/components/BlockSkeleton'
import ListNewCard from 'src/components/ListNewCard'
import { Tooltip, Button } from "@material-tailwind/react";
import ButtonCustom from 'src/components/Button/Button'
export interface NewType {
  id: number
  attributes: {
    banner_new: any
    content: string
    description: string
    new_categorises: []
    new_tags: any
    title: string
    createdAt: string
  }
  item: any
}

function New() {
  // get config param
  const queryConfig = useQueryConfig()
  const [openFilterBox, setOpenFilterBox] = useState(false)
  const [view, setView] = useState('grid')
  // call api news
  const { data: newsData, isLoading } = useQuery({
    queryKey: ['new', queryConfig],
    queryFn: () => {
      return newApi.getNews({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const open = () => {
    setOpenFilterBox(!openFilterBox)
  }

  const renderNews = () => {
    if (view === 'grid') {
      return <Cardnew newsData={newsData} />
    } else {
      return <ListNewCard newsData={newsData} />
    }
  }

  return (
    <>
      <div className='ml-[50px] mt-5'>
        <h1 className='mb-9 text-3xl font-bold'>🎉 Tin tức</h1>
        <div className='mt-[30px] overflow-hidden lg:mt-[10px] '>
          <div className='mb-7 flex items-center justify-between pr-8'>
            <SortNew queryConfig={queryConfig} />
            <div className='flex'>
              <ButtonCustom
                size="sm" 
                variant="text"
                className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3"
                onClick={open}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
                Lọc tin tức
              </ButtonCustom>
              <div className='border-r-1 mx-4 my-2 border' />
              <Tooltip content='Hiển thị danh sách' placement='top' animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
                <IconButton aria-label='delete' onClick={() => setView('list')}>
                  <FaListUl />
                </IconButton>
              </Tooltip>
              <Tooltip content='Hiển thị lưới' placement='top' animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
                <IconButton aria-label='delete' onClick={() => setView('grid')}>
                  <FaGripHorizontal />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          {openFilterBox && <Filters open={open} />}

          <div
            className={
              view === 'grid'
                ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:pr-[44px] xl:grid-cols-4'
                : 'grid grid-cols-2 gap-5'
            }
          >
            {renderNews()}
            {isLoading && <BlockSkeleton sklType='grid' className='2' number={20} />}
          </div>

          <div className='my-9 flex justify-center'>
            <Paginationcustom queryConfig={queryConfig} pageCount={newsData?.data?.meta.pagination.pageCount} />
          </div>
        </div>
      </div>
    </>
  )
}

export default New
