import { useQuery } from '@tanstack/react-query'
import newApi from 'src/apis/new.api'
import Cardnew from 'src/components/Cardnew'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import SortNew from './Components/Sort'
import { createSearchParams, useNavigate } from 'react-router-dom'

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
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  // call api news
  const { data: newsData, isLoading } = useQuery({
    queryKey: ['new', queryConfig],
    queryFn: () => {
      return newApi.getNews(queryConfig as ConfigParams)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  console.log(queryConfig)
  // const handleFilter = () => {
  //   navigate({
  //     pathname: '/new',
  //     search: createSearchParams({
  //       ...queryConfig
  //     }).toString()
  //   })
  // }

  return (
    <>
      <div className='ml-[50px] mt-5'>
        <h1 className='mb-9 text-3xl font-bold'>Tin tức</h1>
        <div className='mt-[30px] overflow-hidden lg:mt-[10px] '>
          <div className='mb-7 flex items-center justify-between pr-8'>
            <SortNew queryConfig={queryConfig} />
            <button
              // onClick={handleFilter}
              className='transition-4 flex cursor-pointer items-center rounded-full border px-4 py-1 hover:bg-slate-200/60'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-2 h-6 w-6 text-color1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                />
              </svg>
              <span className='text-lg text-color1'>Lọc</span>
            </button>
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <Cardnew newsData={newsData} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  )
}

export default New
