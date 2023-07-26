import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
interface TagType {
  attributes: {
    tag_name: string
  }
}

function NewCard(item: {
  id: React.Key | null | undefined
  attributes: {
    banner_new: { data: { attributes: { url: any } }[] }
    createdAt: string
    new_tags: { data: TagType[] }
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
    description:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
  }
}) {
  // format date and time
  function formatDate(createdAt: string) {
    const date = new Date(createdAt)
    const options: any = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
    const formattedDate = date.toLocaleString('vi-VN', options)
    return formattedDate.replace('lúc', '')
  }

  return (
    <>
      <div className='mb-[25px]' key={item.id}>
        <div className='relative mb-[20px] block h-auto w-full overflow-hidden'>
          <img
            className='w-full'
            src={`http://localhost:1337${item.attributes.banner_new.data[0]?.attributes.url}`}
            alt='something'
          />
        </div>
        <div className='flex items-center '>
          <div className='flex items-center pr-[20px]'>
            <Avatar>N</Avatar>
            <h5 className='ml-[9px]'>Admin PMC</h5>
          </div>
          <div className='flex items-center border-l-2 border-r-2 px-[20px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mr-[9px] h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
              />
            </svg>
            <h5>{formatDate(item.attributes.createdAt)}</h5>
          </div>
          <div className='flex items-center px-[20px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mr-[9px] h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
              />
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 6h.008v.008H6V6z' />
            </svg>
            <h5>
              {item.attributes.new_tags.data?.map((tag: TagType) => {
                return tag.attributes.tag_name
              })}
            </h5>
          </div>
        </div>
        <h3 className='mb-[20px] text-[24px] font-semibold'>{item.attributes.title}</h3>
        <p className='mb-[20px] text-[14px] font-normal text-[#685F78]'>{item.attributes.description}</p>
        <Button variant='contained' color='success'>
          Đọc thêm
        </Button>
      </div>
    </>
  )
}

export default NewCard
