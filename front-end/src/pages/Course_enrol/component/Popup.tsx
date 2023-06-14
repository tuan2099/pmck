import React from 'react'
import SkeletonTypography from 'src/components/SkeletonTypography'

function Popup({ courseDetaildata, togglePopup }: any) {
  return (
    <>
      <div className='fixed inset-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-80'>
        <div className='h-[90%] w-[90%] transform rounded-lg bg-white p-6 transition-all duration-300'>
          <div className='m-auto max-w-[1200px]'>
            <h3 className='mb-5 mt-4 text-3xl font-bold'>
              {courseDetaildata?.data.data.attributes.course_name ? (
                courseDetaildata?.data.data.attributes.course_name
              ) : (
                <div role='status' className='max-w-sm animate-pulse'>
                  <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                </div>
              )}
            </h3>
            <p className='mb-4'>
              {courseDetaildata?.data.data.attributes.course_description ? (
                courseDetaildata?.data.data.attributes.course_description
              ) : (
                <SkeletonTypography dataSkeletonTypography={5} />
              )}
            </p>

            <button onClick={togglePopup} className='rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300'>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup
