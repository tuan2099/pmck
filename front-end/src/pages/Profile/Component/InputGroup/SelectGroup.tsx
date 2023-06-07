import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

interface Iprops {
  name: string
  lable: string
  children: ReactNode
  defaultValue: string
}

const SelectGroup = (props: Iprops) => {
  const { name, lable, children, defaultValue } = props

  const { register } = useFormContext()

  return (
    <div className='mb-3 flex flex-col items-center gap-2 md:mb-7 md:flex-row md:gap-5'>
      <label htmlFor={name} className='w-full font-semibold md:w-40 md:text-right lg:w-56'>
        {lable}
      </label>
      <select
        id={name}
        defaultValue={defaultValue}
        {...register(name)}
        className='w-full border p-2 focus:outline-blue-400 md:w-1/2'
      >
        {children}
      </select>
    </div>
  )
}

export default SelectGroup
