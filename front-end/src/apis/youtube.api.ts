function getYouTubeVideoDuration(videoId: string) {
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=AIzaSyB4j74m6L8f90SnuoyuzzYX5fy0aGnf64U`

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const duration = data.items[0].contentDetails.duration
      return duration
    })
    .catch((error) => {
      console.error('Failed to get video duration:', error)
      return null
    })
}

export default getYouTubeVideoDuration
