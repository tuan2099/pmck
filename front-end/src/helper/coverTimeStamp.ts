export const covertTimeStamp = (time: string) => {
  const date = new Date(time)
  return `tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`
}
