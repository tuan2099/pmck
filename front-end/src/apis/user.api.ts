import { User } from 'src/types/user.type'
import http from 'src/utils/https'

const profileApi = {
  getProfile() {
    return http.get<User>('/users/me?populate[course_registrations][populate][courses][populate]=*', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
  },
  updateProfile(data: { id: number; data: any }) {
    return http.put(`/users/${data.id}`, data.data)
  }
}

export default profileApi
