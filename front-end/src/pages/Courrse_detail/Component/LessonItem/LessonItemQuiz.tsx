import { useEffect, useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

function LessonItemQuiz({ item, chooseItem, setLessonId, onSetChooseItem, chapter }: any) {
  const [isCompletedChapter, setIsCompletedChapter] = useState<boolean>(false)

  const [_, setParams] = useSearchParams()

  const handleOpenQuizz = () => {
    const isOpen = onSetChooseItem(chapter, item)
    console.log(isOpen)
    if (isOpen) {
      setParams((prev) => {
        return { ...prev, id: item.attributes.title + item.id }
      })

      setLessonId(item.id)
    }
  }

  return (
    <>
      <button
        className='flex cursor-pointer items-center justify-between px-[20px] py-[10px] hover:bg-[#f1f1f1]'
        onClick={handleOpenQuizz}
        style={{
          backgroundColor: item?.id === chooseItem?.id ? '#bbf7d0' : ''
        }}
      >
        <div className=''>
          <div>
            <h3 className=' text-left text-base font-normal text-black'>{item.attributes.name}</h3>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
            />
          </svg>
        </div>
        <div>
          {!isCompletedChapter && (
            <div className='text-gray-500'>
              <FaLock />
            </div>
          )}
        </div>
      </button>
    </>
  )
}

export default LessonItemQuiz
