export const covertTimeStamp = (time: string) => {
  const date = new Date(time)
  return `tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`
}

export const convertMinutes = (time: number | null) => {
  if (time === null) {
    return '00:00'
  }

  const seconds = parseInt(time.toString(), 10)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0')

  return `${formattedMinutes}:${formattedSeconds}`
}
