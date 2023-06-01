import { useFormContext } from 'react-hook-form'
import { ReactNode } from 'react'

interface Iprops {
  name: string
  lable: string
  children: ReactNode
  defaultValue: string
}

const SelectGroup = (props: Iprops) => {
  const { name, lable, children, defaultValue } = props

  //   const { register, formState } = useFormContext()

  return (
    <div className='mb-7 flex items-center gap-5'>
      <label htmlFor={name} className='w-56 text-right font-semibold'>
        {lable}
      </label>
      <select name={name} id={name} defaultValue={defaultValue} className='w-1/2 border p-2 focus:outline-blue-400'>
        {children}
      </select>
    </div>
  )
}

export default SelectGroup
