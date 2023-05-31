import React from 'react'

interface Props {
  children?: React.ReactNode
}

function LessonLayout({ children }: Props) {
  return <div>{children}</div>
}

export default LessonLayout
