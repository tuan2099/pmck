export const generateImageUrl = (data: any) => {
  const keys: string[] = []
  // eslint-disable-next-line no-prototype-builtins
  if (data.hasOwnProperty('medium')) return `http://localhost:1337${data.medium.url}`
  for (const key in data) {
    keys.unshift(key)
  }
  if (keys.length) {
    return `http://localhost:1337${data[keys[0]].url}`
  }
  return ''
}
