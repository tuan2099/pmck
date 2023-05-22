import http from 'src/utils/https'
export const COURSE_URL = '/courses?populate=*'
const courseApi = {
  getCourse() {
    return http.get(COURSE_URL)
  },
  getDetailCourse(id: string) {
    return http.get(`/courses/${id}?populate=*`)
  }
}

export default courseApi
