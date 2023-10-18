import http from 'src/utils/https'
import { ConfigParams } from 'src/hooks/useQueryConfig'

const URL_NEWS = '/news?'
const URL_NEWSNOTIFICATION = '/new-notifications?'
const URL_GETCATEGORY = '/new-categories?'

const newApi = {
  getNews(params: ConfigParams) {
    return http.get(URL_NEWS, { params })
  },
  getNewsNotification(params: ConfigParams) {
    return http.get(URL_NEWSNOTIFICATION, { params })
  },
  getCategoryNews(params: ConfigParams) {
    return http.get(URL_GETCATEGORY, { params })
  }
}

export default newApi
