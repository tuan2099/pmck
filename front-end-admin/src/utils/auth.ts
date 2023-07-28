import { User } from 'src/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const saveAccesTokenToLocalStorage = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
// export const saveRefreshTokenToLocalStorage = (refresh_token: string) => {
//   localStorage.setItem('refresh_token', refresh_token)
// }
export const clearAccesTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('profile') // xóa cả profile
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent) // gọi
}

export const getAccesTokenLocalStorage = () => localStorage.getItem('access_token') || ''
// export const getRefreshToken = () => localStorage.getItem('refresh_token') || ''

export const getProfileFromLocalStorage = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfileToLocalStorage = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
