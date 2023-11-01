import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { NewsType } from 'src/types/news.type'
import NewspaperIcon from '@mui/icons-material/Newspaper'
function ListNewCard(newsData) {
  return (
    <>
      {newsData &&
        newsData.newsData?.data?.data?.map((item: NewsType) => {
          return (
            <>
              <Link to={`${item.id}`} key={item.id} className='mb-[30px] w-full cursor-pointer overflow-hidden px-1'>
                <div className='grid grid-cols-4 gap-4'>
                  <div
                    className='group relative z-[1] col-span-2 m-auto w-full overflow-hidden rounded-lg pt-[56.25%] before:absolute before:inset-0 before:z-[1] before:block before:bg-black before:opacity-0 before:content-[""] hover:before:bg-black hover:before:opacity-[0.2]'
                    style={{
                      backgroundImage: `url(http://localhost:1337${item.attributes.banner_new?.data[0]?.attributes.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className='text-md absolute left-4 top-3 z-[2] translate-y-8 transform rounded-full bg-white px-3 font-semibold text-mainGreenColor opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                      Tin tức
                    </div>
                    <div className='text-md absolute right-4 top-3 z-[2] translate-y-8 transform rounded-full bg-white px-1 py-1 font-semibold text-mainGreenColor opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='col-span-2 m-auto w-full'>
                    <h4 className='inline flex items-center rounded-lg text-mainGreenColor'>
                      <span className='mr-2'>
                        <NewspaperIcon />
                      </span>{' '}
                      Tin tức
                    </h4>
                    <h5 className='overflow-hidden mt-[5px]  break-words text-[18px] font-semibold leading-snug text-[#292929]'>
                      {item.attributes.title}
                    </h5>
                    <p className='mt-[25px] line-clamp-2 break-words text-[16px] leading-snug'>
                      {item.attributes.description}
                    </p>
                    <div className='mt-2 flex items-center'>
                      <Avatar alt='Admin PMC' src='/static/images/avatar/1.jpg' sx={{ width: 24, height: 24 }} />
                      <h5 className='mx-4'>Admin PMC</h5>
                      <p>- 3 phút đọc</p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          )
        })}
    </>
  )
}

export default ListNewCard
