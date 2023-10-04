import { useQuery } from '@tanstack/react-query'
import newApi from 'src/apis/new.api'
import Cardnew from 'src/components/Cardnew'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import SortNew from './Components/Sort'
import Paginationcustom from './Components/Pagination'
import Custombutton from 'src/components/Custombutton'
import { FaFilter, FaGripHorizontal, FaListUl } from 'react-icons/fa'
import { IconButton, Tooltip } from '@mui/material'
import Filters from './Components/Filters'

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

  // call api news
  const { data: newsData, isLoading } = useQuery({
    queryKey: ['new', queryConfig],
    queryFn: () => {
      return newApi.getNews({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

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
              >
                {' '}
                Lọc tin tức
              </Custombutton>
              <div className='border-r-1 mx-4 my-2 border' />
              <Tooltip title='Hiển thị danh sách' placement='top'>
                <IconButton aria-label='delete'>
                  <FaListUl />
                </IconButton>
              </Tooltip>
              <Tooltip title='Hiển thị lưới' placement='top'>
                <IconButton aria-label='delete'>
                  <FaGripHorizontal />
                </IconButton>
              </Tooltip>
              <Filters />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:pr-[44px] xl:grid-cols-4'>
            <Cardnew newsData={newsData} />
            {isLoading && (
              <>
                {Array(20)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      role='status'
                      className='mr-3 animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0'
                      key={index}
                    >
                      <div className='flex h-60 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700'>
                        <svg
                          className='h-12 w-12 text-gray-200'
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 640 512'
                        >
                          <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
                        </svg>
                      </div>
                    </div>
                  ))}
              </>
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
