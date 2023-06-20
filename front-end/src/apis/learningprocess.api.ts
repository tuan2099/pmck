import http from 'src/utils/https'

const learningProcessApi = {
  getLearningProgresses() {
    return http.get('/learning-progresses')
  },
  getLesson() {
    return http.get('/lesson-items?populate[learning_progresses][populate]=lesson_items')
  }
}

export default learningProcessApi
