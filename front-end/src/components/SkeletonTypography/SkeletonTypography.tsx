import React from 'react'

interface SkeletonTypographyProps {
  dataSkeletonTypography: number
}

function SkeletonTypography({ dataSkeletonTypography }: SkeletonTypographyProps) {
  return (
    <>
      <div role='status' className='max-w-sm animate-pulse'>
        {Array(dataSkeletonTypography)
          .fill(0)
          .map((_, index) => (
            <div key={index} className='mb-2.5 h-2 w-[900px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          ))}
      </div>
    </>
  )
}

export default SkeletonTypography
