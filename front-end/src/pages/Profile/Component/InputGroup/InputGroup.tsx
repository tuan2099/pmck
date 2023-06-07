import { useFormContext } from 'react-hook-form'

interface Iprops {
  name: string
  lable: string
  defaultValue?: string
}

const InputGroup = (props: Iprops) => {
  const { name, lable, defaultValue } = props

  const { register, formState } = useFormContext()

  return (
    <div className='mb-3 flex flex-col items-center gap-2 md:mb-7 md:flex-row md:gap-5'>
      <label htmlFor={name} className='w-full font-semibold md:w-40 md:text-right lg:w-56'>
        {lable}
      </label>
      <input
        type='text'
        id={name}
        className='w-full border p-2 text-sm focus:outline-blue-400 md:w-1/2'
        defaultValue={defaultValue}
        {...register(name)}
      />
      {formState.errors[name] && <p>{formState.errors[name]?.message as string}</p>}
    </div>
  )
}

export default InputGroup
