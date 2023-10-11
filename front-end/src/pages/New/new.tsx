import { useQuery } from '@tanstack/react-query'
import newApi from 'src/apis/new.api'
import Cardnew from 'src/components/Cardnew'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import SortNew from './Components/Sort'
import Paginationcustom from './Components/Pagination'
import Custombutton from 'src/components/Custombutton'
import { FaFilter, FaGripHorizontal, FaListUl } from 'react-icons/fa'
import {  IconButton, Tooltip } from '@mui/material'
import Filters from './Components/Filters'
import { useState } from 'react'
import BlockSkeleton from 'src/components/BlockSkeleton'
import ListNewCard from 'src/components/ListNewCard'

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
    if(view === 'grid') {
      return <Cardnew newsData={newsData} />
    } else {
      return <ListNewCard newsData={newsData}/>
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
              <Custombutton
                textColor='#4F4F4F'
                bgcolor='none'
                border='none'
                borderColor='none'
                hoverBgColor='none'
                startIcon={<FaFilter />}
                onClick={open}
              >
                {' '}
                Lọc tin tức
              </Custombutton>
              <div className='border-r-1 mx-4 my-2 border' />
              <Tooltip title='Hiển thị danh sách' placement='top'>
                <IconButton aria-label='delete' onClick={() => setView('list')}>
                  <FaListUl />
                </IconButton>
              </Tooltip>
              <Tooltip title='Hiển thị lưới' placement='top'>
                <IconButton aria-label='delete' onClick={() => setView('grid')}>
                  <FaGripHorizontal />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          {openFilterBox && (
           <Filters open={open}/>
          )}

          <div  className={view === 'grid'? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:pr-[44px] xl:grid-cols-4' : 'grid grid-cols-2 gap-5'}>
            {renderNews()}
            {isLoading && (
              <BlockSkeleton sklType="grid" className="2" number={20}/>
            )}
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
