import http from 'src/utils/https'

const courseRegistationApi = {
  courseRegistation() {
    return http.get('/course-registrations?populate=*')
  }
}

export default courseRegistationApi
