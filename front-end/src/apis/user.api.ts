import http from 'src/utils/https'
export const URL_ME = '/users/me?populate[course_registrations][populate][0]=courses'

const profileApi = {
  getProfile() {
    return http.get(URL_ME)
  }
}

export default profileApi
