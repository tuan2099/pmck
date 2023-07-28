import http from 'src/utils/https'

const faqQuestionApi = {
  getFaqQuestions() {
    return http.get('/q-and-as')
  }
}

export default faqQuestionApi
