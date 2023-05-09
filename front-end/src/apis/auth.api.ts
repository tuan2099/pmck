import http from 'src/utils/https'

export const URL_LOGIN = '/auth/local'
export const URL_REGISTER = '/auth/local/register'

const authApi = {
  registerAccount(body: { username: string; identifier: string; password: string }) {
    return http.post(URL_REGISTER, body)
  },
  login(body: { identifier: string; password: string }) {
    return http.post(URL_LOGIN, body)
  }
}

export default authApi
