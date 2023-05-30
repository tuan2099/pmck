import React from 'react'

interface Props {
  children?: React.ReactNode
}

function Boxwrapper({ children }: Props) {
  return (
    <>
      <div
        className='w-full rounded-lg px-[14px] py-[18px]'
        style={{ boxShadow: '0 0 5px 0 rgba(0,0,0,.1), 0 0 1px 0 rgba(0,0,0,.1)' }}
      >
        {children}
      </div>
    </>
  )
}

export default Boxwrapper
