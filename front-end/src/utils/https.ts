import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import {
  clearAccesTokenFromLocalStorage,
  getAccesTokenLocalStorage,
  saveAccesTokenToLocalStorage,
  setProfileToLocalStorage
} from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccesTokenLocalStorage()
    this.instance = axios.create({
      baseURL: 'http://localhost:1337/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          // config.headers.authorization =
          //   config.url === '/users/me?populate[course_registrations][populate][courses][populate]=*'
          //     ? `Bearer ${this.accessToken}`
          //     : this.accessToken
          // return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/auth/local' || url === '/auth/local/register') {
          const data = response.data
          this.accessToken = data.jwt
          saveAccesTokenToLocalStorage(this.accessToken)
          setProfileToLocalStorage(data.user)
        } else if (url === '/logout') {
          this.accessToken = ''
          clearAccesTokenFromLocalStorage()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http
