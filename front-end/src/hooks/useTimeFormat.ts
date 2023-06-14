const useTimeFormat = (input: any) => {
  const formatTime = (input: any) => {
    const timeArray = input.match(/\d+/g)
    const minutes = parseInt(timeArray[0], 10)
    const seconds = parseInt(timeArray[1], 10)

    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  const formattedTime = formatTime(input)

  return formattedTime
}
export default useTimeFormat
