import { Link } from 'react-router-dom'
import useRegisteCourse from 'src/hooks/useRegisteCourse'
import { CourseType } from 'src/types/course.type'
import { generateNameId } from 'src/utils/uitls'

interface IProps {
  courseItem: CourseType
}
const ListCourseItem = (props: IProps) => {
  const { courseItem } = props
  const { isRegisted } = useRegisteCourse({ courseInfo: courseItem })

  return (
    <Link
      to={
        isRegisted
          ? `/learning/${generateNameId({
              name: courseItem.attributes?.course_name ? courseItem.attributes?.course_name : courseItem.course_name,
              id: courseItem.id
            })}`
          : `/course/${generateNameId({
              name: courseItem.attributes?.course_name ? courseItem.attributes?.course_name : courseItem.course_name,
              id: courseItem.id
            })}`
      }
      className='items-top flex w-full bg-white p-[12px]'
      key={courseItem.id}
    >
      <div className='mr-[24px] w-[240px]'>
        <img
          src={`http://localhost:1337${
            courseItem.attributes?.banner_course
              ? courseItem.attributes?.banner_course.data[0].attributes?.formats.medium?.url
              : courseItem.banner_course[0].formats.medium.url
          }`}
          alt='banner course'
        />
      </div>
      <div>
        <h4 className='mt-3 text-xl font-semibold'>{courseItem.attributes.course_name}</h4>
        <p>{courseItem.attributes.short_description}</p>
      </div>
    </Link>
  )
}

export default ListCourseItem
