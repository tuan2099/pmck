import http from 'src/utils/https'

const URL_NEWS = '/news?populate=*'
const URL_NEW = ''

const newApi = {
  getNews() {
    return http.get(URL_NEWS)
  }
}

export default newApi
