import http from 'src/utils/https'

const mainmenuApi = {
  getMainmenu() {
    return http.get('/main-menu?populate[body][populate][sections][populate]=*')
  }
}

export default mainmenuApi
