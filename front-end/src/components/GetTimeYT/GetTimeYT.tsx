import React, { useState } from 'react'
import ReactPlayer from 'react-player'

interface videoProps {
  video_url?: string
  className?: string
}

function getTimeFromYouTubeUrl(url: any) {
  // Tách lấy ID video từ URL
  const videoId = url.split('v=')[1]
  // Nếu không tìm thấy ID video
  if (!videoId) {
    return null
  }

  // Lấy thời gian từ ID video
  const timeInSeconds = parseInt(videoId, 10) % 86400
  console.log(timeInSeconds)
  // Chuyển đổi thời gian sang định dạng hh:mm:ss
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  const seconds = timeInSeconds % 60

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`

  return formattedTime
}

function GetTimeYT() {
  const youtubeUrl = 'https://www.youtube.com/watch?v=Z37ukFI4Ot0'

  const time = getTimeFromYouTubeUrl(youtubeUrl)

  return (
    <div>
      <h1>Thời gian từ URL YouTube:</h1>
      <p>{time}</p>
    </div>
  )
}

export default GetTimeYT
