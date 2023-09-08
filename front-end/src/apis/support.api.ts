import http from 'src/utils/https'

const URL_GET_CATEGORY = '/q-and-a-categories?populate=*'

const supportApi = {
  getCategorySupport() {
    return http.get(URL_GET_CATEGORY)
  }
}

export default supportApi
