import http from 'src/utils/https'

const URL_FOOTER = "/footer-menu?populate[body][populate][sections][populate]=*"

const footerApi = {
  getFooter() {
    return http.get(URL_FOOTER)
  }
}

export default footerApi
