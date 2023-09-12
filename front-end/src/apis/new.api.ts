import http from 'src/utils/https'

const URL_NEWS = '/news?populate=*'
const URL_NEWSNOTIFICATION = '/new-notifications?populate=*'

const newApi = {
  getNews() {
    return http.get(URL_NEWS)
  },
  getNewsNotification() {
    return http.get(URL_NEWSNOTIFICATION)
  }
}

export default newApi
