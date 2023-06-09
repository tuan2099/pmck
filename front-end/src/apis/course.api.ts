import { CourseResponseType } from 'src/types/course.type'
import http from 'src/utils/https'

export const COURSE_URL = '/courses?populate=*'
export const LIST_COURSE_URL = 'list-courses?populate[courses][populate][0]=banner_course'

const courseApi = {
  getListcourse() {
    return http.get(LIST_COURSE_URL)
  },
  getCourse() {
    return http.get<CourseResponseType>(COURSE_URL)
  },
  getDetailCourse(id: string) {
    return http.get(`/courses/${id}?populate[0]=banner_course&populate[1]=chapters.lesson_items`)
  },
  registerCourse(body: { users?: number; courses: number; isRegistrationCourse: boolean }) {
    return http.post(`/course-registrations`, {
      data: body
    })
  },
  registerCoursess() {
    return http.get(`/course-registrations?populate=*`)
  },
  updateCourseRegisted({ id, data }: { id: string | number | any; data: any }) {
    return http.put(
      `/course-registrations/${id}?populate=*`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    )
  },
  createCourseRegisted(data: any) {
    return http.post(
      '/course-registrations',
      { data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    )
  }
}

export default courseApi
