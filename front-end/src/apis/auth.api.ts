import http from 'src/utils/https'

export const URL_LOGIN = '/auth/local'
export const URL_REGISTER = '/auth/local/register'
export const URL_FORGOT_PASS = '/auth/forgot-password'
export const URL_RESET_PASS = '/auth/reset-password'

const authApi = {
  registerAccount(body: { username: string; email: string; password: string }) {
    return http.post(URL_REGISTER, body)
  },
  login(body: { identifier: string; password: string }) {
    return http.post(URL_LOGIN, body)
  },
  forgotPassword(body: { email: string }) {
    return http.post(URL_FORGOT_PASS, body)
  },
  resetPassword(body: { code: string; password: string; passwordConfirmation: string }) {
    return http.post(URL_RESET_PASS, body)
  }
}

export default authApi
