import { Link } from 'react-router-dom'
import CourseCard from 'src/components/CourseCard'
import { CourseType } from 'src/types/course.type'
import { ROUTES } from 'src/useRouterElement'

const LIMIT_ITEM = 8

const FeaturedCourse = ({ data }: { data?: CourseType[] }) => {
  return (
    <div className='mt-9'>
      <h2 className='p-2 text-center text-2xl font-bold uppercase'>Khóa học nổi bật</h2>
      <div className='mt-5 grid gap-5 px-4 sm:grid-cols-2 md:mt-14 md:px-20 lg:grid-cols-3 xl:grid-cols-4'>
        {data?.slice(0, LIMIT_ITEM).map((course) => (
          <CourseCard courseItem={course} key={course.id} />
        ))}
      </div>
      <div className='m-4 flex'>
        <Link
          to={ROUTES.allCourse}
          className='m-auto rounded-md bg-grayColor px-3 py-2 text-sm font-medium sm:text-base'
        >
          Tất cả khóa học
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourse
