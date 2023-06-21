import http from 'src/utils/https'

const learningProcessApi = {
  getLearningProgresses() {
    return http.get('/learning-progresses')
  },
  getLesson() {
    return http.get('/lesson-items?populate[learning_progresses][populate]=lesson_items')
  },
  getCompleteLesson() {
    return http.get('/users/me?populate[learning_progresses][populate]=*', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
  }
}

export default learningProcessApi
