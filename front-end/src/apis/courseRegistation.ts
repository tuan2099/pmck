import http from 'src/utils/https'

const courseRegistationApi = {
  courseRegistation() {
    return http.get('/course-registrations?populate=*')
  },
  checkCourseRegisted({ userID, courseID }: { userID: string | number; courseID: string | number }) {
    return http.get(`/check-course-registed?userID=${userID}&courseID=${courseID}`)
  }
}

export default courseRegistationApi
