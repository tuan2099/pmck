import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FaLink, FaMailBulk, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa'
import supportApi from 'src/apis/support.api'
import { SupportType } from 'src/types/support.type'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import { Avatar } from "@material-tailwind/react";
import {
  Input,
  Drawer,
  IconButton,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

// icon setting for arcodion
function Icon({ id, openArcodion }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === openArcodion ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


function Question() {
  const [openArcodion, setOpenArcodion] = useState(1)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [QAList, setQAList] = useState<any[]>([])
  const queryConfig = useQueryConfig()

  const {
    data: supportQuestionApi,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['support'],
    queryFn: () => {
      return supportApi.getCategorySupport({ ...(queryConfig as ConfigParams) })
    }
  })

  // setting open list question 
  const handleOpenDrawer = (id: number) => {
    const chooseCategory = supportQuestionApi?.data.data.find((item: any) => +item.id === id)
    setQAList(chooseCategory?.attributes.q_and_as.data)
    setOpenDrawer(true)
  }
  // setting close list question 
  const handleCloseDrawer = () => {
    setOpenDrawer(false)
    setQAList([])
  }
  // toogle arrcodion
  const handleOpenAccordion = (value: any) => {
    setOpenArcodion(openArcodion === value ? 0 : value)
  }

  return (
    <>
      <div className='min-h-sceen mx-auto bg-white px-5'>
        <div className='flex items-center justify-between'>
          <h1 className='my-8 flex items-center text-xl font-semibold text-color1'>
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size='sm' />
            <span className='ml-2'>Hỗ trợ người dùng</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {supportQuestionApi &&
            supportQuestionApi?.data.data?.map((item: SupportType) => {
              return (
                <button
                  onClick={() => handleOpenDrawer(item.id)}
                  className='w-full cursor-pointer bg-[#f1f1f1] py-9 transition hover:bg-[#dbdbdb]'
                  key={item.id}
                >
                  <div className='m-auto mb-3 flex w-[90px] justify-center '>
                    <img
                      src={`http://localhost:1337${item.attributes.image.data[0].attributes?.url}`}
                      alt={`${item.attributes.label}`}
                    />
                  </div>
                  <h3 className='text-center font-medium text-color1'>{item.attributes.label}</h3>
                </button>
              )
            })}
          {isLoading && (
            <>
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className=''>
                    {/* <Skeleton variant='rounded' height={250} /> */}
                  </div>
                ))}
            </>
          )}
          <Drawer open={openDrawer} placement="right" size={720} onClose={handleCloseDrawer}>
            <div className='w-[43%] min-w-[720px] max-w-full'>
              <div className='flex items-center justify-between p-6'>
                <h2 className='text-2xl font-bold'>Tiêu đề</h2>
                <IconButton variant="text" onClick={handleCloseDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <div className='p-6'>
                {QAList.map((item: any) => (
                  <div key={item.id} className='my-4'>
                    <Accordion open={openArcodion === item.id} icon={<Icon id={item.id} openArcodion={openArcodion}/>}>
                      <AccordionHeader className='text-md' onClick={() => handleOpenAccordion(item.id)}>{item.attributes.question}</AccordionHeader>
                      <AccordionBody>
                        {item.attributes.answer}
                      </AccordionBody>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </Drawer>
          <div className='flex w-full cursor-pointer flex-col justify-between transition'>
            <div>
              <div className='mb-2 flex justify-center pt-3 text-color1'>
                <FaQuestionCircle />
              </div>
              <h3 className='text-center text-sm text-color1'>Nếu bạn không tìm thấy câu hỏi</h3>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <a
                href='tel:04853362'
                className='flex w-full cursor-pointer flex-col items-center justify-center bg-[#f1f1f1] py-4 text-[25px] text-color1 transition hover:bg-[#dbdbdb]'
              >
                <FaPhoneAlt />
                <div className='mt-1 text-sm'>Liên hệ</div>
              </a>
              <a
                href='mailto:abc@gmail.com'
                className='flex w-full cursor-pointer flex-col items-center justify-center bg-[#f1f1f1] py-4 text-[25px] text-color1 transition hover:bg-[#dbdbdb]'
              >
                <FaMailBulk />
                <div className='mt-1 text-sm'>Gửi Email</div>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Question
