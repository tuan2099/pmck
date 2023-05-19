export const setStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const getStorage = (name: string) => {
  const data = localStorage.getItem(name)
  return typeof data === 'string' ? JSON.parse(data) : null
}

export const deleteStorage = (name: string) => {
  localStorage.removeItem(name)
}
