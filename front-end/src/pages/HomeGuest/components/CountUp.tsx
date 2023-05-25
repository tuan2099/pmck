import { useState, useEffect, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

import { homeGuestCounter } from 'src/assets/images'

interface IProps {
  data: { icon: ReactNode; max: number; value: string }[]
}

const CountUpContainer = ({ data }: IProps) => {
  const [isCount, setIsCount] = useState<boolean>(false)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setIsCount(true)
    }
  }, [inView])

  return (
    <div
      className=' bg-cover bg-no-repeat md:h-[600px]'
      style={{ backgroundImage: `url(${homeGuestCounter})` }}
      ref={ref}
    >
      <div className='flex h-full bg-modalColor'>
        <div className='my-auto w-full'>
          <div className='m-auto flex flex-col items-center'>
            <h2 className='mt-10 text-xl font-bold uppercase text-white md:mt-16 md:text-3xl'>OUR ACHIEVEMENTS</h2>
            <div className='my-5 text-center text-sm uppercase text-white md:my-10'>
              Here you can review some statistics about our Education Center
            </div>
          </div>
          {isCount && (
            <div className='flex w-full flex-col flex-wrap justify-between px-4 sm:flex-row'>
              {data.map((item, index) => (
                <div className='mb-5  flex w-full flex-col items-center gap-3 sm:mb-8 sm:w-1/2 lg:w-1/4' key={index}>
                  <div className='text-5xl text-white md:text-6xl'>{item.icon}</div>
                  <div className='text-3xl font-semibold text-yellowColor md:text-5xl'>
                    <CountUp start={0} end={item.max} duration={10} />
                  </div>
                  <div className='text-sm font-medium uppercase text-white sm:text-base'>{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountUpContainer
