import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  // private accessToken: string
  constructor() {
    // this.accessToken = getAccesToken()
    this.instance = axios.create({
      baseURL: '',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const http = new Http().instance
export default http
