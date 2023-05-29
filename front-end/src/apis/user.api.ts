import { getAccesTokenLocalStorage } from 'src/utils/auth'
import http from 'src/utils/https'
export const URL_ME = '/users/me'

const profileApi = {
  getProfile() {
    http.get(URL_ME, {
      headers: {
        Authorization: 'Bearer sabdahsgdash'
      }
    })
  }
}

export default profileApi
