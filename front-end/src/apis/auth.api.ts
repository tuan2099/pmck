import http from 'src/utils/https'

export const URL_LOGIN = '/auth/local'

const authApi = {
  login(body: { identifier: string; password: string }) {
    return http.post(URL_LOGIN, body)
  }
}

export default authApi
