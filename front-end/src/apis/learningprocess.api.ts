import http from 'src/utils/https'

const learningProcessApi = {
  getLearningProgresses() {
    return http.get('/learning-progresses')
  }
}

export default learningProcessApi
