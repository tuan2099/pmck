import { CourseResponseType } from 'src/types/course.type'
import http from 'src/utils/https'

export const COURSE_URL = '/courses?populate=*'
export const LIST_COURSE_URL = 'list-courses?populate[courses][populate][0]=banner_course'

const courseApi = {
  getListcourse({ page, courseName }: { page: string | any; courseName: string | null }) {
    if (page && courseName) {
      return http.get(`/courses?pagination%5Bpage%5D=${page}&filters%5Bcourse_name%5D=${courseName}&populate=*`)
    } else if (page) return http.get(`/courses?pagination%5Bpage%5D=${page}&populate=*`)
    else if (courseName) return http.get(`/courses?filters%5Bcourse_name%5D=${courseName}&populate=*`)
    else return http.get(`/courses?populate=*`)
  },
  createCourse(data: any) {
    return http.post(
      '/courses',
      { data },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjk5Mjg1NTA1LCJleHAiOjE3MDE4Nzc1MDV9.41jPwN84aT-3eb-ZQOkqOv4kFTFKz5BLL3s8bscrYhE'
        }
      }
    )
  },
  updateCourse(id: any, data: any) {
    return http.put(
      `/courses/${id}`,
      { data },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjk5Mjg1NTA1LCJleHAiOjE3MDE4Nzc1MDV9.41jPwN84aT-3eb-ZQOkqOv4kFTFKz5BLL3s8bscrYhE'
        }
      }
    )
  },
  deleteCourse(id: any) {
    return http.delete(`/courses/${id}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjk5Mjg1NTA1LCJleHAiOjE3MDE4Nzc1MDV9.41jPwN84aT-3eb-ZQOkqOv4kFTFKz5BLL3s8bscrYhE'
      }
    })
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
