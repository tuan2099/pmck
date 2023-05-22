import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Coords, Position } from 'src/types/popover.types'
import useClickOutSide from 'src/hooks/useClickOutSide'
import useGetElementCoords from 'src/hooks/useGetElementCoords'

interface PopoverProps {
  coords: Coords
  position: Position
  children?: React.ReactNode
  className?: string
}
function ClickPopover({ children, renderPopover, className }: any) {
  const [isShowSettings, setIsShowSettings] = useState<boolean>(false)
  const { nodeRef } = useClickOutSide(() => setIsShowSettings(false))
  const { coords, elmRef, handleGetElementCoords } = useGetElementCoords()
  const handleToggleSettings = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsShowSettings((s) => !s)
    handleGetElementCoords(e)
  }
  return (
    <>
      <div className=''>
        <div className='relative' ref={nodeRef}>
          <button className='cursor-pointer' onClick={handleToggleSettings} ref={elmRef} tabIndex={0}>
            {children}
          </button>
          {isShowSettings && (
            <Popover coords={coords} position='right' className={className}>
              {renderPopover}
            </Popover>
          )}
        </div>
      </div>
    </>
  )
}

function Popover({ coords, position = 'left', children, className = 'z-10' }: PopoverProps) {
  if (typeof document === 'undefined') return null
  return createPortal(
    <div
      style={{
        left: position === 'right' ? coords.x + coords.width : coords.x,
        top: coords.y + coords.height * 1.5
      }}
      className={`absolute top-full z-10 ${position === 'right' ? '-translate-x-full' : ''} ${className}`}
    >
      {children}
    </div>,
    document.getElementById('root') as HTMLElement
  )
}

export default ClickPopover
