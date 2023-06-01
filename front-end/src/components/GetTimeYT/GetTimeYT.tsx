import React, { useState } from 'react'
import ReactPlayer from 'react-player'

interface videoProps {
  video_url?: string
  className?: string
}

function GetTimeYT({ video_url, className }: videoProps) {
  const [videoLength, setVideoLength] = useState(null)

  const handleDuration = async (duration: any) => {
    setVideoLength(duration)
  }

  function convertSecondsToMinutes(seconds: any) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <>
      <div className={className}>
        <ReactPlayer url={video_url} controls={false} width={0} height={0} onDuration={handleDuration} />
        {convertSecondsToMinutes(videoLength)}
      </div>
    </>
  )
}

export default GetTimeYT
