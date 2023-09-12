import http from 'src/utils/https'

const URL_GET_CATEGORY = '/q-and-a-categories?populate=*'
const URL_GET_QA = '/q-and-as?populate=*'

const supportApi = {
  getCategorySupport() {
    return http.get(URL_GET_CATEGORY)
  },
  getQA() {
    return http.get(URL_GET_QA)
  }
}

export default supportApi
