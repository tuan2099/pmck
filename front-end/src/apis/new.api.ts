import http from 'src/utils/https'
import { ConfigParams } from 'src/hooks/useQueryConfig'

const URL_NEWS = '/news?'
const URL_NEWSNOTIFICATION = '/new-notifications?populate=*'

const newApi = {
  getNews(params: ConfigParams) {
    console.log(params)
    return http.get(URL_NEWS, { params })
  },
  getNewsNotification() {
    return http.get(URL_NEWSNOTIFICATION)
  }
}

export default newApi
