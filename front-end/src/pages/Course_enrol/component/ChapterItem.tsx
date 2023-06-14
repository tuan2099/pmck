function ChapterItem({ chapter }: any) {
  return (
    <div className='flex justify-between'>
      <h5 className='flex items-center font-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-3 h-5 w-5 text-[#1e7115]'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
        {chapter.attributes.lesson_name}
      </h5>
      <p className='text-[#333333]'>{chapter.attributes.lesson_items.data?.length} bài học</p>
    </div>
  )
}

export default ChapterItem
