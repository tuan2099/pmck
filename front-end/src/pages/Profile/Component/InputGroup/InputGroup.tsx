import { useFormContext } from 'react-hook-form'

interface Iprops {
  name: string
  lable: string
}

const InputGroup = (props: Iprops) => {
  const { name, lable } = props

  //   const { register, formState } = useFormContext()

  return (
    <div className='mb-7 flex items-center gap-5'>
      <label htmlFor={name} className='w-56 text-right font-semibold'>
        {lable}
      </label>
      <input type='text' id={name} className='w-1/2 border p-2 focus:outline-blue-400' />
      {/* {formState.errors[name] && <p>{formState.errors[name]?.message as string}</p>} */}
    </div>
  )
}

export default InputGroup
