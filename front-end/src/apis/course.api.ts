import http from 'src/utils/https'
export const COURSE_URL = '/courses?populate=*'
export const LIST_COURSE_URL = 'list-courses?populate[courses][populate][0]=banner_course'

const courseApi = {
  getListcourse() {
    return http.get(LIST_COURSE_URL)
  },
  getCourse() {
    return http.get(COURSE_URL)
  },
  getDetailCourse(id: string) {
    return http.get(`/courses/${id}?populate=*`)
  }
}

export default courseApi
