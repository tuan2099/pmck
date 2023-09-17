import ListCourseItem from './ListCourseItem'

function ListCourse({ data, listStyle }: any) {
  return (
    <>
      {Boolean(data.length) && listStyle === 'list' && (
        <div className=''>
          {data?.map((course: any) => (
            <ListCourseItem courseItem={course} key={course.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListCourse
