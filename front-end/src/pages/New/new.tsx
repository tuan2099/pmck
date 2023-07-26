import { useQuery } from '@tanstack/react-query'
import newApi from 'src/apis/new.api'
import NewCard from './Component/NewCard'

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
  const { data: newsData } = useQuery({
    queryKey: ['new'],
    queryFn: () => {
      return newApi.getNews()
    }
  })

  return (
    <>
      <div className='ml-[50px] mt-5'>
        <h1 className='mb-9 text-3xl font-bold'>Tin tức</h1>
        <div className=' w-full max-w-[1200px] py-[80px]'>
          <div className=''>
            <div className='items-top flex'>
              <div className='w-[75%] px-[12px]'>
                <div className=''>
                  {newsData &&
                    newsData?.data.data.map((item: NewType) => {
                      return <NewCard {...item} key={item.id} />
                    })}
                </div>
              </div>
              <div className='w-[25%] px-[12px]'>
                <div className=''>
                  <div className='mb-[20px] rounded-[10px] border p-[20px]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default New
