import { User } from 'src/types/user.type'
import http from 'src/utils/https'
export const URL_ME = '/users/me?populate[course_registrations][populate][courses][populate]=*'

const profileApi = {
  getProfile() {
    return http.get<User>(URL_ME)
  },
  updateProfile(data: { id: number; data: any }) {
    return http.put(`/users/${data.id}`, data.data)
  }
}

export default profileApi
