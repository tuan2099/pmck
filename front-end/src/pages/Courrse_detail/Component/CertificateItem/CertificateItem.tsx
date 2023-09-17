import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import { AppContext } from 'src/context/app.context'
import { ROUTES } from 'src/useRouterElement'

interface IProps {
  quizzId: number | string
  certificateId: string | number
  isCompleteAllLesson: boolean
}

const CertificateItem = (props: IProps) => {
  const { quizzId, certificateId, isCompleteAllLesson } = props

  const [isActive, setIsActive] = useState(false)

  const { profile } = useContext(AppContext)

  useQuery({
    queryKey: ['quizz-grade', quizzId],
    queryFn: () => courseApi.getQuizGrade(),
    onSuccess: (data) => {
      const quizzGrades = data.data.data
      const quizzGrade = quizzGrades.find(
        (item: any) =>
          +item?.attributes?.quiz?.data.id === +quizzId &&
          +item?.attributes?.users_permissions_user?.data.id === +profile.id
      )
      setIsActive(isCompleteAllLesson && quizzGrade?.attributes?.gr >= 7.5)
    },
    enabled: Boolean(quizzId) && Boolean(certificateId)
  })

  useEffect(() => {
    if (!quizzId) {
      setIsActive(isCompleteAllLesson)
    }
  })

  return (
    <>
      {isActive && (
        <Link
          to={`${ROUTES.certificate}?certificate=${certificateId}`}
          className='flex cursor-pointer items-center justify-between px-[20px] py-[10px] hover:bg-[#f1f1f1]'
        >
          Chứng chỉ
        </Link>
      )}
      {!isActive && (
        <div className='flex cursor-pointer items-center justify-between px-[20px] py-[10px] hover:bg-[#f1f1f1]'>
          Chứng chỉ
        </div>
      )}
    </>
  )
}

export default CertificateItem
