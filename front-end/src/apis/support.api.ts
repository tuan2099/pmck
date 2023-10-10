import http from 'src/utils/https'
import { ConfigParams } from 'src/hooks/useQueryConfig'

const URL_GET_CATEGORY = '/q-and-a-categories?'
const URL_GET_QA = '/q-and-as?'

const supportApi = {
  getCategorySupport(params: ConfigParams) {
    return http.get(URL_GET_CATEGORY, {params})
  },
  getQA(params: ConfigParams) {
    return http.get(URL_GET_QA, {params})
  }
}

export default supportApi
