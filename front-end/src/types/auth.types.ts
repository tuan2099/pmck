import http from 'src/utils/https'

const URL_LOGIN = '/auth/local'

const authApi = {
  login(body: { identifier: string; password: string }) {
    return http.post(URL_LOGIN, body)
  }
}

export default authApi
