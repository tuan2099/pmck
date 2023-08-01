import http from 'src/utils/https'

const footerApi = {
  getFooter() {
    return http.get('/footer-menu?populate[body][populate][sections][populate]=*')
  }
}

export default footerApi
