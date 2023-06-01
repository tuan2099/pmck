import { User } from 'src/types/user.type'
import http from 'src/utils/https'
export const URL_ME = '/users/me?populate[course_registrations][populate][0]=courses'

const profileApi = {
  getProfile() {
    return http.get<User>(URL_ME)
  }
}

export default profileApi
