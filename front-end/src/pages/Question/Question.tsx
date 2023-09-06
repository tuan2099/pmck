import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useQuery } from '@tanstack/react-query'
import faqQuestionApi from 'src/apis/faqQuestion.api'

function Question() {
  const { data: faqQuestion } = useQuery({
    queryKey: ['FAQQuestion'],
    queryFn: () => {
      return faqQuestionApi.getFaqQuestions()
    }
  })
  return (
    <>
      <div className='min-h-sceen mx-auto max-w-screen-xl bg-white px-5'>
        <div className='items-left flex flex-col'>
          <h2 className='mt-5 text-5xl font-bold tracking-tight text-color1'>FAQ</h2>
          <p className='text-md mt-3 text-neutral-500'>Câu hỏi thường gặp</p>
        </div>
        <div className=' mt-8 grid max-w-[1100px] '>
          <div className='my-3 rounded-md border px-4 py-6'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span className='text-color1'> 1. What is a SAAS platform?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                SAAS platform is a cloud-based software service that allows users to access and use a variety of tools
                and functionality.
              </p>
            </details>
          </div>
          <div className='my-3 rounded-md border px-4 py-6'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span> 1. What is a SAAS platform?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                SAAS platform is a cloud-based software service that allows users to access and use a variety of tools
                and functionality.
              </p>
            </details>
          </div>
          <div className='my-3 rounded-md border px-4 py-6'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span> 1. What is a SAAS platform?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                SAAS platform is a cloud-based software service that allows users to access and use a variety of tools
                and functionality.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
